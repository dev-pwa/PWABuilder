export function isUrl(url: string): boolean {
  try {
    return typeof new URL(url) === 'string';
  } catch (e) {
    if (!(e instanceof TypeError)) {
      console.log(e);
    }
  }

  return false;
}

export function resolveUrlForManifest(
  baseUrl: string | undefined | null,
  url: string | undefined | null
): URL | undefined {
  let parsedUrl: URL | undefined = undefined;

  try {
    if (url) {
      parsedUrl = new URL(url);
    }
  } catch (e) {
    if (!(e instanceof TypeError)) {
      console.log('url has a problem', url);
      console.error(e);
    }
  }

  if (!parsedUrl) {
    try {
      if (baseUrl && url) {
        parsedUrl = new URL(url, baseUrl);
      }
    } catch (e) {
      console.log('url has a problem', baseUrl, url);
      console.error(e);
    }
  }

  if (!parsedUrl && baseUrl) {
    return new URL(baseUrl);
  }

  return parsedUrl;
}

export function validateUrl(url: string, base?: string): string | null {
  try {
    new URL(url, base);
    return null;
  } catch (urlError) {
    return urlError;
  }
}

export async function cleanUrl(url: string) {
  // let cleanedUrl: string | undefined;
  let initialUrl: URL | string | undefined;

  // initial test, checking if entered URL is a valid URL
  try {
    initialUrl = new URL(url);
    return initialUrl;
  }
  catch (err) {
    try {
      // Its not, so lets try https + www and return if good
      initialUrl = new URL(`https://www.${url}`);
      return initialUrl;
    }
    catch (err) {
      try {
        // last try with no www
        initialUrl = new URL('https://' + url);
        return initialUrl;
      }
      catch(err) {
        throw `${err.message}: this error means that you may have a bad https cert or the url may not be correct`;
      }
    }
  }
}
