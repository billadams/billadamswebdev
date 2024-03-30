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

  if (response.status === 202) {
    success = true;
  }

  return new Response(response);
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
        value: `New message from ${name} (${email}): "${message}"`,
      },
    ],
    personalizations: [
      {
        from: {
          email: env.SENDGRID_EMAIL_SENDER,
          name: 'billadamswebdev.com',
        },
        to: [
          {
            email: env.SENDGRID_EMAIL_RECIPIENT,
            name: 'Bill Adams',
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
  try {
    const email = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(composedRequest),
    });

    return email;
  } catch (error) {
    return { status: 500, statusText: error };
  }
}
