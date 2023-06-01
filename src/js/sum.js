import _ from 'lodash';

console.log(_.join(['Sum', 'module', 'loaded!'], ' '));

function sum(a, b) {
  return a + b
}

export default sum