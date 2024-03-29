interface Env {
	KV: KVNamespace;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
	const value = await context.env.KV.get('example');
 	return new Response(value);
}