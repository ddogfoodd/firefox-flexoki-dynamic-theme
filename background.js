let currentTheme = '';

const themes = {
  'light': {
    images: {},
    colors: {
      toolbar: 'rgb(255, 252, 240)',
      toolbar_text: 'rgb(16, 15, 15)',
      frame: 'rgb(242, 240, 229)',
      tab_background_text: 'rgb(111, 110, 105)',
      toolbar_field: 'rgb(242, 240, 229)',
      toolbar_field_text: 'rgb(16, 15, 15)',
      tab_line: 'rgb(206, 205, 195)',
      popup: 'rgb(255, 252, 240)',
      popup_text: 'rgb(16, 15, 15)',
      button_background_hover: 'rgb(218, 216, 206)',
      ntp_background: 'rgb(255, 252, 240)',
      ntp_text: 'rgb(16, 15, 15)',
      popup_highlight_text: 'rgb(218, 216, 206)',
      popup_highlight: 'rgb(32, 94, 166)',
      sidebar_highlight: 'rgb(218, 216, 206)',
      sidebar_text: 'rgb(16, 15, 15)',
      sidebar: 'rgb(242, 240, 229)',
      tab_loading: 'rgb(111, 110, 105)'
    }
  },
  'dark': {
    images: {},
    colors: {
      toolbar: 'rgb(16, 15, 15)',
      toolbar_text: 'rgb(230, 228, 217)',
      frame: 'rgb(28, 27, 26)',
      tab_background_text: 'rgb(206, 205, 195)',
      toolbar_field: 'rgb(28, 27, 26)',
      toolbar_field_text: 'rgb(230, 228, 217)',
      tab_line: 'rgb(64, 62, 60)',
      popup: 'rgb(16, 15, 15)',
      popup_text: 'rgb(230, 228, 217)',
      ntp_background: 'rgb(16, 15, 15)',
      ntp_text: 'rgb(230, 228, 217)',
      popup_highlight_text: 'rgb(230, 228, 217)',
      popup_highlight: 'rgb(67, 133, 190)',
      sidebar_highlight: 'rgb(52, 51, 49)',
      sidebar_text: 'rgb(230, 228, 217)',
      sidebar: 'rgb(28, 27, 26)',
      tab_loading: 'rgb(40, 39, 38)'
    }
  }
};

function setTheme(theme) {
  if (currentTheme === theme) {
    // No point in changing the theme if it has already been set.
    return;
  }
  currentTheme = theme;
  browser.theme.update(themes[theme]);
}

function checkTime() {
  let date = new Date();
  let hours = date.getHours();
  // Will set the sun theme between 7am and 10pm.
  if ((hours > 7) && (hours < 22)) {
    setTheme('light');
  } else {
    setTheme('dark');
  }
}

// On start up, check the time to see what theme to show.
checkTime();

// Set up an alarm to check this regularly.
browser.alarms.onAlarm.addListener(checkTime);
browser.alarms.create('checkTime', {periodInMinutes: 5});