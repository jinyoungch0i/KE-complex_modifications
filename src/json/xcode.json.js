// JavaScript should be written in ECMAScript 5.1.

const karabiner = require('../lib/karabiner')

function main() {
  console.log(
    JSON.stringify(
      {
        title: 'Xcode',
        rules: [
          {
            description: 'Xcode Visual Studio style (Run, Stop, Build, Step, Breakpoint)',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'f5', modifiers: { mandatory: ['shift'] } },
                to: [{ key_code: 'period', modifiers: ['left_command'] }],
                conditions: [
                  {
                    type: 'frontmost_application_if',
                    bundle_identifiers: karabiner.bundleIdentifiers.xcode,
                  },
                ],
              },
              {
                type: 'basic',
                from: { key_code: 'f5' },
                to: [{ key_code: 'r', modifiers: ['left_command'] }],
                conditions: [
                  {
                    type: 'frontmost_application_if',
                    bundle_identifiers: karabiner.bundleIdentifiers.xcode,
                  },
                ],
              },
              {
                type: 'basic',
                from: { key_code: 'f7' },
                to: [{ key_code: 'b', modifiers: ['left_command'] }],
                conditions: [
                  {
                    type: 'frontmost_application_if',
                    bundle_identifiers: karabiner.bundleIdentifiers.xcode,
                  },
                ],
              },
              {
                type: 'basic',
                from: { key_code: 'b', modifiers: { mandatory: ['shift', 'control'] } },
                to: [{ key_code: 'b', modifiers: ['left_command'] }],
                conditions: [
                  {
                    type: 'frontmost_application_if',
                    bundle_identifiers: karabiner.bundleIdentifiers.xcode,
                  },
                ],
              },
              {
                type: 'basic',
                from: { key_code: 'f9' },
                to: [{ key_code: '7', modifiers: ['left_shift', 'left_option', 'left_command'] }],
                conditions: [
                  {
                    type: 'frontmost_application_if',
                    bundle_identifiers: karabiner.bundleIdentifiers.xcode,
                  },
                ],
              },
              {
                type: 'basic',
                from: { key_code: 'f10' },
                to: [{ key_code: 'f6', modifiers: [] }],
                conditions: [
                  {
                    type: 'frontmost_application_if',
                    bundle_identifiers: karabiner.bundleIdentifiers.xcode,
                  },
                ],
              },
              {
                type: 'basic',
                from: { key_code: 'f11' },
                to: [{ key_code: 'f7', modifiers: [] }],
                conditions: [
                  {
                    type: 'frontmost_application_if',
                    bundle_identifiers: karabiner.bundleIdentifiers.xcode,
                  },
                ],
              },
              {
                type: 'basic',
                from: { key_code: 'f11', modifiers: { mandatory: ['shift'] } },
                to: [{ key_code: 'f8', modifiers: [] }],
                conditions: [
                  {
                    type: 'frontmost_application_if',
                    bundle_identifiers: karabiner.bundleIdentifiers.xcode,
                  },
                ],
              },
            ],
          },
        ],
      },
      null,
      '  '
    )
  )
}

main()
