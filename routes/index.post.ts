import consola from "consola";

export default eventHandler(async (event) => {
  const body = await readRawBody(event);
  consola.info("raw body", body);
  consola.info("raw body type", typeof body);
  return { body, type: typeof body };
});
