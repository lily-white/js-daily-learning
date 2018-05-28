const path = require('path');
const fileSave = require('file-save');
const uppercamelcase = require('uppercamelcase');
const componentname = process.argv[2];
const ComponentName = uppercamelcase(componentname);
const PackagePath = path.resolve(__dirname, '../src/components', componentname);
const ExamplePath = path.resolve(__dirname, '../src/example/pages');

const Files = [
	{
    filename: 'index.js',
    content: `export {default} from './src/${componentname}'`
    },
    {
	    filename: `src/${componentname}.vue`,
	    content: `<template>
	<div class="m-${componentname}"></div>
</template>
<script>
export default {
  name: 'mt-${componentname}'
};
</script>
<style>
@component-namespace m {
	@component ${componentname} {

	}
}
</style>
`
	 }
];

Files.forEach(file => {
  fileSave(path.join(PackagePath, file.filename))
    .write(file.content, 'utf8')
    .end('\n');
});

const example = `<template>
	<div class="page-${componentname}">
		<div class="page-title">${ComponentName}</div>
		
	</div>
</template>
<script>
	export default {
		name: '${ComponentName}'
	}
</script>
<style>

</style>
	`;

fileSave(path.join(ExamplePath, `${componentname}.vue`))
	.write(example, 'utf8')
	.end('\n');

const navConfigFile = require('../src/example/nav.conf.json');

navConfigFile.forEach( nav => {
	nav.list.push({
		path: `/${componentname}`,
		name: `${ComponentName}`
	})
});

fileSave(path.join(__dirname, '../src/example/nav.conf.json'))
    .write(JSON.stringify(navConfigFile, null, '  '), 'utf8')
    .end('\n');