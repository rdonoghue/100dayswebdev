const testFlag = true;

function test(val) {
  if (testFlag) {
    console.log(val);
  }
}

module.exports = {
  test: test,
};
