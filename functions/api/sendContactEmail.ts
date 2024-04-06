interface Env {
  KV: KVNamespace;
  ENVIRONMENT: string;
  SENDGRID_API_KEY: string;
  SENDGRID_EMAIL_SENDER: string;
  SENDGRID_EMAIL_RECIPIENT: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  let success = false;
  const { request, env } = context;

  let formData = await readRequestBody(request);
  const composedRequest = composeRequest(formData, env);
  const response = await sendEmail(composedRequest, env);

  return response;
};

function composeRequest(formData: { [key: string]: string }, env: Env) {
  const { name, email, message } = formData;

  return {
    from: {
      email: env.SENDGRID_EMAIL_SENDER,
      name: 'Bill Adams',
    },
    replyTo: {
      email: `${email}`,
      name: `${name}`,
    },
    subject: 'New message from BA Web Dev Contact Form',
    content: [
      {
        type: 'text/plain',
        value: `New message from ${name} (${email}):\r\n\r\n "${message}"`,
      },
    ],
    personalizations: [
      {
        to: [
          {
            email: env.SENDGRID_EMAIL_RECIPIENT,
          },
        ],
      },
    ],
  };
}

async function readRequestBody(request: Request) {
  const formData = await request.formData();

  let body: { [key: string]: string } = {};
  for (let entry of formData.entries()) {
    body[entry[0]] = entry[1];
  }

  return body;
}

async function sendEmail(composedRequest: any, env: Env) {
  let emailResponse: Response | undefined = undefined;
  try {
    emailResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
      },
      body: JSON.stringify(composedRequest),
    });

    return emailResponse;
  } catch (error) {
    return new Response(emailResponse?.body, {
      status: emailResponse?.status,
      statusText: emailResponse?.statusText,
    });
  }
}
