export function getOwnProps(obj) {
  const ownProps = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) {
      ownProps.push(key);
    }
  }
  return ownProps.filter(el => typeof obj[el] !== 'function');
}
