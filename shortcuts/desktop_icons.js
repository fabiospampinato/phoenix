
/* DESKTOP ICONS */

setKeyHandler ( 'f6', HYPER, () => {

  shell ( 'defaults read com.apple.finder CreateDesktop', ({ output }) => {

    const isVisible = ( output.trim () === 'true' );

    alert ( isVisible ? 'Hiding desktop icons' : 'Showing desktop icons' );

    shell ( `defaults write com.apple.finder CreateDesktop ${!isVisible} && killall Finder` );

  });

});
