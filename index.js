module.exports = Franz => class Ryver extends Franz {
  overrideUserAgent() {
    // Force desktop view
    return 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.4) Gecko/20100101 Firefox/4.0';
  }
};