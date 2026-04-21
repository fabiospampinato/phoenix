
/* COLORPICKER */

setKeyHandler ( '=', HYPER, () => {

  shell (`
/usr/bin/env swift - <<'EOF'
  import AppKit
  let app = NSApplication.shared; app.setActivationPolicy(.accessory)
  let sampler = NSColorSampler()
  sampler.show { selectedColor in
    if let color = selectedColor, let rgbColor = color.usingColorSpace(.sRGB) {
      let r = Int(round(rgbColor.redComponent * 255.0))
      let g = Int(round(rgbColor.greenComponent * 255.0))
      let b = Int(round(rgbColor.blueComponent * 255.0))
      let hexString = String(format: "#%02X%02X%02X", r, g, b)
      NSPasteboard.general.clearContents()
      NSPasteboard.general.setString(hexString, forType: .string)
    }
    exit(0)
  }
  app.run()
EOF
  `);

});
