export default function fontLoader(fonts, afterCls) {
  let promise;
  if (window.FontFace) {
    promise = loadNative(fonts, afterCls);
  } else {
    // todo
  }
  promise.then(() => (document.documentElement.className += ` ${afterCls}`));
}

function loadNative(fonts) {
  let all = fonts.reduce((promises, font) => {
    let ff = new FontFace(...font);
    let promise = ff.load().then(() => {
      document.fonts.add(ff);
      return Promise.resolve();
    }, Promise.reject);
    promises.push(promise);
    return promises;
  }, []);
  return Promise.all(all);
}
