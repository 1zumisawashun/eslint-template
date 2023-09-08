import * as path from 'path'

export default {
  'src/**/*.{ts,tsx}': (absolutePaths) => {
    const cwd = process.cwd()
    const relativePaths = absolutePaths
      .map((file) => path.relative(cwd, file))
      .join(' ')
    return [
      // `eslint ${relativePaths}`,
      // `prettier --write ${relativePaths}`,
      // `cspell ${relativePaths}`,
      "bash -c 'npm run compile'",
      'npm run format:fix',
      'npm run lint:js:fix',
      // 'npm run lint:css:fix',
      'git add'
    ]
  }
}
