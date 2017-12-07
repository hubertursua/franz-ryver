'use strict';

module.exports = Franz => {
  const getMessages = () => {
    const directMessages = document.querySelectorAll([
      '#freya__UiContainer_4 .scene-space-tab-button--flash',
    ].join(',')).length;

    const allMessages = document.querySelectorAll([
      '#freya__UiContainer_1 .scene-space-tab-button--flash',
      '#freya__UiContainer_2 .scene-space-tab-button--flash',
      '#freya__UiContainer_3 .scene-space-tab-button--flash',
    ].join(',')).length;

    Franz.setBadge(directMessages, allMessages);
  };
  Franz.loop(getMessages);
};
