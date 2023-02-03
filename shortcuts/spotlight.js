
//TODO: This is a placeholder bare-bones implementation of a Spotlight-like input modal, but it can't be implemented because input modals are too buggy as of today

// {

//   const APPS = ['1Password', 'AetherSX2', 'Affinity Designer', 'Affinity Photo', 'App Store', 'Automator', 'Books', 'Calculator', 'Calendar', 'Chess', 'Color Picker', 'Contacts', 'Dictionary', 'Electron Fiddle', 'FaceTime', 'FindMy', 'Firefox', 'Font Book', 'Google Chrome', 'Home', 'Hyperkey', 'IINA', 'Image Capture', 'ImageOptim', 'Launchpad', 'Lingon X', 'logioptionsplus', 'Mail', 'Maps', 'Messages', 'Mission Control', 'MonitorControl', 'Music', 'News', 'Notable', 'Notes', 'OpenEmu', 'Parallels Desktop', 'Paw', 'Phoenix', 'Photo Booth', 'Photos', 'Podcasts', 'Preview', 'QuickTime Player', 'Reminders', 'Safari', 'Shortcuts', 'Siri', 'Steam', 'Stickies', 'Stocks', 'Sublime Text', 'System Preferences', 'TablePlus', 'TextEdit', 'The Unarchiver', 'Time Machine', 'TinkerTool', 'Tower', 'Transmission', 'Transmit', 'TV', 'Visual Studio Code', 'VoiceMemos', 'Xcode'];

//   function fuzzyMatch(needle, haystack) {
//     if(needle === "" || haystack === "") return true;
//     needle = needle.toLowerCase().replace(/ /g, "");
//     haystack = haystack.toLowerCase();
//     // All characters in needle must be present in haystack
//     var j = 0; // haystack position
//     for(var i = 0; i < needle.length; i++) {
//         // Go down the haystack until we find the current needle character
//         while(needle[i] !== haystack[j]) {
//             j++;
//             // If we reached the end of the haystack, then this is not a match
//             if(j === haystack.length) {
//                 return false;
//             }
//         }
//         // Here, needle character is same as haystack character
//         //console.log(needle + ":" + i + " === " + haystack + ":" + j);
//     }
//     // At this point, we have matched every single letter in the needle without returning false
//     return true;
//   }

//   const modal = Modal.build ({
//     origin: {
//       x: 0,
//       y: 0
//     },
//     weight: 25,
//     // duration: MODAL_DURATION,
//     animationDuration: .2,
//     appearance: 'dark',
//     text: 'Search...',
//     isInput: true,
//     icon: App.get ( 'Phoenix' ).icon (),
//     textDidChange ( text ) {
//       appendFile ( '/Users/fabio/Desktop/output.txt', `[${text}]\n` );
//       const app = APPS.find ( app => fuzzyMatch ( text, app ) );
//       appendFile ( '/Users/fabio/Desktop/output.txt', `${text} - ${app}\n` );
//     }
//   });

//   const onExit = () => {
//     appendFile ( '/Users/fabio/Desktop/output.txt', `[CLOSING]\n` );
//     modal.close ();
//     Key.off ( onExitId );
//     Key.off ( onEnterId );
//   };

//   const onEnter = () => {
//     appendFile ( '/Users/fabio/Desktop/output.txt', `[ENTERING]\n` );
//     modal.close ();
//     Key.off ( onExitId );
//     Key.off ( onEnterId );
//   };

//   const onExitId = Key.on ( 'escape', [], onExit );
//   const onEnterId = Key.on ( 'return', [], onEnter );

//   Key.on ( 'space', ['ctrl'], () => {
//     modal.show ();
//   });

// }
