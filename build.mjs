import { rollup } from 'rollup'
import { loadConfigFile } from 'rollup/loadConfigFile'
import fs from 'fs/promises'

async function rollupBuild(cb) {
    const { options, warnings } = await loadConfigFile('./rollup.config.mjs')
    warnings.flush()
    for (const option of options) {
        const bundle = await rollup(option)
        await Promise.all(option.output.map(bundle.write))
    }
}

await fs.rm('./dist', { recursive: true })
await rollupBuild()
await fs.copyFile('./package.json', 'dist/package.json')