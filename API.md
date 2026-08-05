# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsCdkConstructLibraryProject <a name="AwsCdkConstructLibraryProject" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject"></a>

AwsCdkConstructLibraryProject with standard configuration and component integration.

Extends Projen's base class with opinionated defaults and automatic component setup.

#### Initializers <a name="Initializers" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.Initializer"></a>

```typescript
import { AwsCdkConstructLibraryProject } from '@nikovirtala/projen-constructs'

new AwsCdkConstructLibraryProject(options: AwsCdkConstructLibraryProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.Initializer.parameter.options">options</a></code> | <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions">AwsCdkConstructLibraryProjectOptions</a></code> | - Project configuration. |

---

##### `options`<sup>Required</sup> <a name="options" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions">AwsCdkConstructLibraryProjectOptions</a>

Project configuration.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `toString` <a name="toString" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `pnpm projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "projectCreation()" for all components, only if the project is being created for the first time
6. Call "postSynthesize()" for all components of this project
7. Call "this.postSynthesize()"
8. Call "postProjectCreation()" for all components, only if the project is being created for the first time

##### `tryFindFile` <a name="tryFindFile" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: ...string[]): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addBundledDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDeps` <a name="addDeps" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addDeps"></a>

```typescript
public addDeps(deps: ...string[]): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: ...string[]): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addDevDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addKeywords"></a>

```typescript
public addKeywords(keywords: ...string[]): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addKeywords.parameter.keywords"></a>

- *Type:* ...string[]

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: ...string[]): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addPeerDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### `removeScript` <a name="removeScript" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.isConstruct"></a>

```typescript
import { AwsCdkConstructLibraryProject } from '@nikovirtala/projen-constructs'

AwsCdkConstructLibraryProject.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.isProject"></a>

```typescript
import { AwsCdkConstructLibraryProject } from '@nikovirtala/projen-constructs'

AwsCdkConstructLibraryProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.of"></a>

```typescript
import { AwsCdkConstructLibraryProject } from '@nikovirtala/projen-constructs'

AwsCdkConstructLibraryProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.biome">biome</a></code> | <code>projen.javascript.Biome</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version supported by this package. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.runner">runner</a></code> | <code>projen.typescript.TypeScriptRunner</code> | The TypeScript runner used for executing TypeScript files. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.cdkDeps">cdkDeps</a></code> | <code>projen.awscdk.AwsCdkDeps</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | The target CDK version for this library. |

---

##### `node`<sup>Required</sup> <a name="node" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### ~~`initProject`~~<sup>Optional</sup> <a name="initProject" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.initProject"></a>

- *Deprecated:* use the `initProject` argument passed to `Component.projectCreation()` instead.

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `biome`<sup>Optional</sup> <a name="biome" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.biome"></a>

```typescript
public readonly biome: Biome;
```

- *Type:* projen.javascript.Biome

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### `release`<sup>Optional</sup> <a name="release" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `runner`<sup>Required</sup> <a name="runner" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.runner"></a>

```typescript
public readonly runner: TypeScriptRunner;
```

- *Type:* projen.typescript.TypeScriptRunner

The TypeScript runner used for executing TypeScript files.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `cdkDeps`<sup>Required</sup> <a name="cdkDeps" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.cdkDeps"></a>

```typescript
public readonly cdkDeps: AwsCdkDeps;
```

- *Type:* projen.awscdk.AwsCdkDeps

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string

The target CDK version for this library.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

### AwsCdkTypeScriptAppProject <a name="AwsCdkTypeScriptAppProject" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject"></a>

AwsCdkTypeScriptAppProject with standard configuration and component integration.

Extends Projen's base class with opinionated defaults and automatic component setup.

#### Initializers <a name="Initializers" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.Initializer"></a>

```typescript
import { AwsCdkTypeScriptAppProject } from '@nikovirtala/projen-constructs'

new AwsCdkTypeScriptAppProject(options: AwsCdkTypeScriptAppProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.Initializer.parameter.options">options</a></code> | <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions">AwsCdkTypeScriptAppProjectOptions</a></code> | - Project configuration. |

---

##### `options`<sup>Required</sup> <a name="options" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions">AwsCdkTypeScriptAppProjectOptions</a>

Project configuration.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `toString` <a name="toString" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `pnpm projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "projectCreation()" for all components, only if the project is being created for the first time
6. Call "postSynthesize()" for all components of this project
7. Call "this.postSynthesize()"
8. Call "postProjectCreation()" for all components, only if the project is being created for the first time

##### `tryFindFile` <a name="tryFindFile" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: ...string[]): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addBundledDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDeps` <a name="addDeps" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addDeps"></a>

```typescript
public addDeps(deps: ...string[]): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: ...string[]): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addDevDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addKeywords"></a>

```typescript
public addKeywords(keywords: ...string[]): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addKeywords.parameter.keywords"></a>

- *Type:* ...string[]

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: ...string[]): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addPeerDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### `removeScript` <a name="removeScript" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.isConstruct"></a>

```typescript
import { AwsCdkTypeScriptAppProject } from '@nikovirtala/projen-constructs'

AwsCdkTypeScriptAppProject.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.isProject"></a>

```typescript
import { AwsCdkTypeScriptAppProject } from '@nikovirtala/projen-constructs'

AwsCdkTypeScriptAppProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.of"></a>

```typescript
import { AwsCdkTypeScriptAppProject } from '@nikovirtala/projen-constructs'

AwsCdkTypeScriptAppProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.biome">biome</a></code> | <code>projen.javascript.Biome</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version supported by this package. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.runner">runner</a></code> | <code>projen.typescript.TypeScriptRunner</code> | The TypeScript runner used for executing TypeScript files. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.appEntrypoint">appEntrypoint</a></code> | <code>string</code> | The CDK app entrypoint. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.cdkConfig">cdkConfig</a></code> | <code>projen.awscdk.CdkConfig</code> | cdk.json configuration. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.cdkDeps">cdkDeps</a></code> | <code>projen.awscdk.AwsCdkDeps</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.cdkTasks">cdkTasks</a></code> | <code>projen.awscdk.CdkTasks</code> | Common CDK tasks. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | The CDK version this app is using. |

---

##### `node`<sup>Required</sup> <a name="node" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### ~~`initProject`~~<sup>Optional</sup> <a name="initProject" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.initProject"></a>

- *Deprecated:* use the `initProject` argument passed to `Component.projectCreation()` instead.

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `biome`<sup>Optional</sup> <a name="biome" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.biome"></a>

```typescript
public readonly biome: Biome;
```

- *Type:* projen.javascript.Biome

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### `release`<sup>Optional</sup> <a name="release" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `runner`<sup>Required</sup> <a name="runner" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.runner"></a>

```typescript
public readonly runner: TypeScriptRunner;
```

- *Type:* projen.typescript.TypeScriptRunner

The TypeScript runner used for executing TypeScript files.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `appEntrypoint`<sup>Required</sup> <a name="appEntrypoint" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.appEntrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* string

The CDK app entrypoint.

---

##### `cdkConfig`<sup>Required</sup> <a name="cdkConfig" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.cdkConfig"></a>

```typescript
public readonly cdkConfig: CdkConfig;
```

- *Type:* projen.awscdk.CdkConfig

cdk.json configuration.

---

##### `cdkDeps`<sup>Required</sup> <a name="cdkDeps" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.cdkDeps"></a>

```typescript
public readonly cdkDeps: AwsCdkDeps;
```

- *Type:* projen.awscdk.AwsCdkDeps

---

##### `cdkTasks`<sup>Required</sup> <a name="cdkTasks" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.cdkTasks"></a>

```typescript
public readonly cdkTasks: CdkTasks;
```

- *Type:* projen.awscdk.CdkTasks

Common CDK tasks.

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string

The CDK version this app is using.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

### Bundler <a name="Bundler" id="@nikovirtala/projen-constructs.Bundler"></a>

#### Initializers <a name="Initializers" id="@nikovirtala/projen-constructs.Bundler.Initializer"></a>

```typescript
import { Bundler } from '@nikovirtala/projen-constructs'

new Bundler(project: Project, options?: BundlerOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.Bundler.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.Bundler.Initializer.parameter.options">options</a></code> | <code><a href="#@nikovirtala/projen-constructs.BundlerOptions">BundlerOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-constructs.Bundler.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="@nikovirtala/projen-constructs.Bundler.Initializer.parameter.options"></a>

- *Type:* <a href="#@nikovirtala/projen-constructs.BundlerOptions">BundlerOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.Bundler.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@nikovirtala/projen-constructs.Bundler.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@nikovirtala/projen-constructs.Bundler.postProjectCreation">postProjectCreation</a></code> | Called once, right after `postSynthesize()`, only when the project is created for the first time. |
| <code><a href="#@nikovirtala/projen-constructs.Bundler.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@nikovirtala/projen-constructs.Bundler.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@nikovirtala/projen-constructs.Bundler.projectCreation">projectCreation</a></code> | Called once, right after `synthesize()`, only when the project is created for the first time. |
| <code><a href="#@nikovirtala/projen-constructs.Bundler.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@nikovirtala/projen-constructs.Bundler.addBundle">addBundle</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@nikovirtala/projen-constructs.Bundler.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@nikovirtala/projen-constructs.Bundler.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@nikovirtala/projen-constructs.Bundler.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postProjectCreation` <a name="postProjectCreation" id="@nikovirtala/projen-constructs.Bundler.postProjectCreation"></a>

```typescript
public postProjectCreation(initProject: InitProject): void
```

Called once, right after `postSynthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
It is also skipped when post-synthesis steps are disabled, e.g. `--no-post` or `PROJEN_DISABLE_POST`.
Use it for one-off setup that can be turned off by the user, like running a task to give the user immediate
feedback on their new project. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@nikovirtala/projen-constructs.Bundler.postProjectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `postSynthesize` <a name="postSynthesize" id="@nikovirtala/projen-constructs.Bundler.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@nikovirtala/projen-constructs.Bundler.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `projectCreation` <a name="projectCreation" id="@nikovirtala/projen-constructs.Bundler.projectCreation"></a>

```typescript
public projectCreation(initProject: InitProject): void
```

Called once, right after `synthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
Use it for deterministic, one-off file generation. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@nikovirtala/projen-constructs.Bundler.projectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `synthesize` <a name="synthesize" id="@nikovirtala/projen-constructs.Bundler.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addBundle` <a name="addBundle" id="@nikovirtala/projen-constructs.Bundler.addBundle"></a>

```typescript
public addBundle(entrypoint: string, options: BundlingOptions): Bundle
```

###### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="@nikovirtala/projen-constructs.Bundler.addBundle.parameter.entrypoint"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="@nikovirtala/projen-constructs.Bundler.addBundle.parameter.options"></a>

- *Type:* <a href="#@nikovirtala/projen-constructs.BundlingOptions">BundlingOptions</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.Bundler.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@nikovirtala/projen-constructs.Bundler.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@nikovirtala/projen-constructs.Bundler.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@nikovirtala/projen-constructs.Bundler.isConstruct"></a>

```typescript
import { Bundler } from '@nikovirtala/projen-constructs'

Bundler.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-constructs.Bundler.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@nikovirtala/projen-constructs.Bundler.isComponent"></a>

```typescript
import { Bundler } from '@nikovirtala/projen-constructs'

Bundler.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-constructs.Bundler.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@nikovirtala/projen-constructs.Bundler.of"></a>

```typescript
import { Bundler } from '@nikovirtala/projen-constructs'

Bundler.of(project: Project)
```

###### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-constructs.Bundler.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.Bundler.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@nikovirtala/projen-constructs.Bundler.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.Bundler.property.bundledir">bundledir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.Bundler.property.bundleTask">bundleTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.Bundler.property.esbuildVersion">esbuildVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@nikovirtala/projen-constructs.Bundler.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-constructs.Bundler.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `bundledir`<sup>Required</sup> <a name="bundledir" id="@nikovirtala/projen-constructs.Bundler.property.bundledir"></a>

```typescript
public readonly bundledir: string;
```

- *Type:* string

---

##### `bundleTask`<sup>Required</sup> <a name="bundleTask" id="@nikovirtala/projen-constructs.Bundler.property.bundleTask"></a>

```typescript
public readonly bundleTask: Task;
```

- *Type:* projen.Task

---

##### `esbuildVersion`<sup>Optional</sup> <a name="esbuildVersion" id="@nikovirtala/projen-constructs.Bundler.property.esbuildVersion"></a>

```typescript
public readonly esbuildVersion: string;
```

- *Type:* string

---


### Colima <a name="Colima" id="@nikovirtala/projen-constructs.Colima"></a>

#### Initializers <a name="Initializers" id="@nikovirtala/projen-constructs.Colima.Initializer"></a>

```typescript
import { Colima } from '@nikovirtala/projen-constructs'

new Colima(scope: IConstruct)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.Colima.Initializer.parameter.scope">scope</a></code> | <code>constructs.IConstruct</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@nikovirtala/projen-constructs.Colima.Initializer.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.Colima.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@nikovirtala/projen-constructs.Colima.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@nikovirtala/projen-constructs.Colima.postProjectCreation">postProjectCreation</a></code> | Called once, right after `postSynthesize()`, only when the project is created for the first time. |
| <code><a href="#@nikovirtala/projen-constructs.Colima.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@nikovirtala/projen-constructs.Colima.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@nikovirtala/projen-constructs.Colima.projectCreation">projectCreation</a></code> | Called once, right after `synthesize()`, only when the project is created for the first time. |
| <code><a href="#@nikovirtala/projen-constructs.Colima.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@nikovirtala/projen-constructs.Colima.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@nikovirtala/projen-constructs.Colima.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@nikovirtala/projen-constructs.Colima.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postProjectCreation` <a name="postProjectCreation" id="@nikovirtala/projen-constructs.Colima.postProjectCreation"></a>

```typescript
public postProjectCreation(initProject: InitProject): void
```

Called once, right after `postSynthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
It is also skipped when post-synthesis steps are disabled, e.g. `--no-post` or `PROJEN_DISABLE_POST`.
Use it for one-off setup that can be turned off by the user, like running a task to give the user immediate
feedback on their new project. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@nikovirtala/projen-constructs.Colima.postProjectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `postSynthesize` <a name="postSynthesize" id="@nikovirtala/projen-constructs.Colima.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@nikovirtala/projen-constructs.Colima.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `projectCreation` <a name="projectCreation" id="@nikovirtala/projen-constructs.Colima.projectCreation"></a>

```typescript
public projectCreation(initProject: InitProject): void
```

Called once, right after `synthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
Use it for deterministic, one-off file generation. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@nikovirtala/projen-constructs.Colima.projectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `synthesize` <a name="synthesize" id="@nikovirtala/projen-constructs.Colima.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.Colima.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@nikovirtala/projen-constructs.Colima.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@nikovirtala/projen-constructs.Colima.isConstruct"></a>

```typescript
import { Colima } from '@nikovirtala/projen-constructs'

Colima.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-constructs.Colima.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@nikovirtala/projen-constructs.Colima.isComponent"></a>

```typescript
import { Colima } from '@nikovirtala/projen-constructs'

Colima.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-constructs.Colima.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.Colima.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@nikovirtala/projen-constructs.Colima.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@nikovirtala/projen-constructs.Colima.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-constructs.Colima.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### Homebrew <a name="Homebrew" id="@nikovirtala/projen-constructs.Homebrew"></a>

#### Initializers <a name="Initializers" id="@nikovirtala/projen-constructs.Homebrew.Initializer"></a>

```typescript
import { Homebrew } from '@nikovirtala/projen-constructs'

new Homebrew(project: Project, options?: HomebrewOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.Homebrew.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.Homebrew.Initializer.parameter.options">options</a></code> | <code><a href="#@nikovirtala/projen-constructs.HomebrewOptions">HomebrewOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-constructs.Homebrew.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="@nikovirtala/projen-constructs.Homebrew.Initializer.parameter.options"></a>

- *Type:* <a href="#@nikovirtala/projen-constructs.HomebrewOptions">HomebrewOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.Homebrew.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@nikovirtala/projen-constructs.Homebrew.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@nikovirtala/projen-constructs.Homebrew.postProjectCreation">postProjectCreation</a></code> | Called once, right after `postSynthesize()`, only when the project is created for the first time. |
| <code><a href="#@nikovirtala/projen-constructs.Homebrew.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@nikovirtala/projen-constructs.Homebrew.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@nikovirtala/projen-constructs.Homebrew.projectCreation">projectCreation</a></code> | Called once, right after `synthesize()`, only when the project is created for the first time. |
| <code><a href="#@nikovirtala/projen-constructs.Homebrew.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@nikovirtala/projen-constructs.Homebrew.addPackage">addPackage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@nikovirtala/projen-constructs.Homebrew.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@nikovirtala/projen-constructs.Homebrew.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@nikovirtala/projen-constructs.Homebrew.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postProjectCreation` <a name="postProjectCreation" id="@nikovirtala/projen-constructs.Homebrew.postProjectCreation"></a>

```typescript
public postProjectCreation(initProject: InitProject): void
```

Called once, right after `postSynthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
It is also skipped when post-synthesis steps are disabled, e.g. `--no-post` or `PROJEN_DISABLE_POST`.
Use it for one-off setup that can be turned off by the user, like running a task to give the user immediate
feedback on their new project. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@nikovirtala/projen-constructs.Homebrew.postProjectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `postSynthesize` <a name="postSynthesize" id="@nikovirtala/projen-constructs.Homebrew.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@nikovirtala/projen-constructs.Homebrew.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `projectCreation` <a name="projectCreation" id="@nikovirtala/projen-constructs.Homebrew.projectCreation"></a>

```typescript
public projectCreation(initProject: InitProject): void
```

Called once, right after `synthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
Use it for deterministic, one-off file generation. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@nikovirtala/projen-constructs.Homebrew.projectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `synthesize` <a name="synthesize" id="@nikovirtala/projen-constructs.Homebrew.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addPackage` <a name="addPackage" id="@nikovirtala/projen-constructs.Homebrew.addPackage"></a>

```typescript
public addPackage(packageName: string): void
```

###### `packageName`<sup>Required</sup> <a name="packageName" id="@nikovirtala/projen-constructs.Homebrew.addPackage.parameter.packageName"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.Homebrew.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@nikovirtala/projen-constructs.Homebrew.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@nikovirtala/projen-constructs.Homebrew.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@nikovirtala/projen-constructs.Homebrew.isConstruct"></a>

```typescript
import { Homebrew } from '@nikovirtala/projen-constructs'

Homebrew.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-constructs.Homebrew.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@nikovirtala/projen-constructs.Homebrew.isComponent"></a>

```typescript
import { Homebrew } from '@nikovirtala/projen-constructs'

Homebrew.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-constructs.Homebrew.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@nikovirtala/projen-constructs.Homebrew.of"></a>

```typescript
import { Homebrew } from '@nikovirtala/projen-constructs'

Homebrew.of(project: Project)
```

###### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-constructs.Homebrew.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.Homebrew.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@nikovirtala/projen-constructs.Homebrew.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@nikovirtala/projen-constructs.Homebrew.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-constructs.Homebrew.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### JsiiProject <a name="JsiiProject" id="@nikovirtala/projen-constructs.JsiiProject"></a>

JsiiProject with standard configuration and component integration.

Extends Projen's base class with opinionated defaults and automatic component setup.

#### Initializers <a name="Initializers" id="@nikovirtala/projen-constructs.JsiiProject.Initializer"></a>

```typescript
import { JsiiProject } from '@nikovirtala/projen-constructs'

new JsiiProject(options: JsiiProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.Initializer.parameter.options">options</a></code> | <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions">JsiiProjectOptions</a></code> | - Project configuration. |

---

##### `options`<sup>Required</sup> <a name="options" id="@nikovirtala/projen-constructs.JsiiProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@nikovirtala/projen-constructs.JsiiProjectOptions">JsiiProjectOptions</a>

Project configuration.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `toString` <a name="toString" id="@nikovirtala/projen-constructs.JsiiProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@nikovirtala/projen-constructs.JsiiProject.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@nikovirtala/projen-constructs.JsiiProject.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@nikovirtala/projen-constructs.JsiiProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@nikovirtala/projen-constructs.JsiiProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@nikovirtala/projen-constructs.JsiiProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@nikovirtala/projen-constructs.JsiiProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@nikovirtala/projen-constructs.JsiiProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@nikovirtala/projen-constructs.JsiiProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="@nikovirtala/projen-constructs.JsiiProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@nikovirtala/projen-constructs.JsiiProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@nikovirtala/projen-constructs.JsiiProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@nikovirtala/projen-constructs.JsiiProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@nikovirtala/projen-constructs.JsiiProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@nikovirtala/projen-constructs.JsiiProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@nikovirtala/projen-constructs.JsiiProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@nikovirtala/projen-constructs.JsiiProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@nikovirtala/projen-constructs.JsiiProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@nikovirtala/projen-constructs.JsiiProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `pnpm projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@nikovirtala/projen-constructs.JsiiProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@nikovirtala/projen-constructs.JsiiProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "projectCreation()" for all components, only if the project is being created for the first time
6. Call "postSynthesize()" for all components of this project
7. Call "this.postSynthesize()"
8. Call "postProjectCreation()" for all components, only if the project is being created for the first time

##### `tryFindFile` <a name="tryFindFile" id="@nikovirtala/projen-constructs.JsiiProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@nikovirtala/projen-constructs.JsiiProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@nikovirtala/projen-constructs.JsiiProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@nikovirtala/projen-constructs.JsiiProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@nikovirtala/projen-constructs.JsiiProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@nikovirtala/projen-constructs.JsiiProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@nikovirtala/projen-constructs.JsiiProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@nikovirtala/projen-constructs.JsiiProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@nikovirtala/projen-constructs.JsiiProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: ...string[]): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@nikovirtala/projen-constructs.JsiiProject.addBundledDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDeps` <a name="addDeps" id="@nikovirtala/projen-constructs.JsiiProject.addDeps"></a>

```typescript
public addDeps(deps: ...string[]): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@nikovirtala/projen-constructs.JsiiProject.addDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@nikovirtala/projen-constructs.JsiiProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: ...string[]): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@nikovirtala/projen-constructs.JsiiProject.addDevDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@nikovirtala/projen-constructs.JsiiProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@nikovirtala/projen-constructs.JsiiProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@nikovirtala/projen-constructs.JsiiProject.addKeywords"></a>

```typescript
public addKeywords(keywords: ...string[]): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@nikovirtala/projen-constructs.JsiiProject.addKeywords.parameter.keywords"></a>

- *Type:* ...string[]

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@nikovirtala/projen-constructs.JsiiProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: ...string[]): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@nikovirtala/projen-constructs.JsiiProject.addPeerDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@nikovirtala/projen-constructs.JsiiProject.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@nikovirtala/projen-constructs.JsiiProject.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### `removeScript` <a name="removeScript" id="@nikovirtala/projen-constructs.JsiiProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@nikovirtala/projen-constructs.JsiiProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@nikovirtala/projen-constructs.JsiiProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@nikovirtala/projen-constructs.JsiiProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@nikovirtala/projen-constructs.JsiiProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@nikovirtala/projen-constructs.JsiiProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@nikovirtala/projen-constructs.JsiiProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@nikovirtala/projen-constructs.JsiiProject.isConstruct"></a>

```typescript
import { JsiiProject } from '@nikovirtala/projen-constructs'

JsiiProject.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-constructs.JsiiProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@nikovirtala/projen-constructs.JsiiProject.isProject"></a>

```typescript
import { JsiiProject } from '@nikovirtala/projen-constructs'

JsiiProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-constructs.JsiiProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@nikovirtala/projen-constructs.JsiiProject.of"></a>

```typescript
import { JsiiProject } from '@nikovirtala/projen-constructs'

JsiiProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@nikovirtala/projen-constructs.JsiiProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.biome">biome</a></code> | <code>projen.javascript.Biome</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version supported by this package. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.runner">runner</a></code> | <code>projen.typescript.TypeScriptRunner</code> | The TypeScript runner used for executing TypeScript files. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@nikovirtala/projen-constructs.JsiiProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@nikovirtala/projen-constructs.JsiiProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@nikovirtala/projen-constructs.JsiiProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@nikovirtala/projen-constructs.JsiiProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@nikovirtala/projen-constructs.JsiiProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@nikovirtala/projen-constructs.JsiiProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@nikovirtala/projen-constructs.JsiiProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@nikovirtala/projen-constructs.JsiiProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@nikovirtala/projen-constructs.JsiiProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@nikovirtala/projen-constructs.JsiiProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@nikovirtala/projen-constructs.JsiiProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@nikovirtala/projen-constructs.JsiiProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@nikovirtala/projen-constructs.JsiiProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@nikovirtala/projen-constructs.JsiiProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@nikovirtala/projen-constructs.JsiiProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@nikovirtala/projen-constructs.JsiiProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@nikovirtala/projen-constructs.JsiiProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@nikovirtala/projen-constructs.JsiiProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@nikovirtala/projen-constructs.JsiiProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@nikovirtala/projen-constructs.JsiiProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@nikovirtala/projen-constructs.JsiiProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@nikovirtala/projen-constructs.JsiiProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@nikovirtala/projen-constructs.JsiiProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### ~~`initProject`~~<sup>Optional</sup> <a name="initProject" id="@nikovirtala/projen-constructs.JsiiProject.property.initProject"></a>

- *Deprecated:* use the `initProject` argument passed to `Component.projectCreation()` instead.

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@nikovirtala/projen-constructs.JsiiProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@nikovirtala/projen-constructs.JsiiProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@nikovirtala/projen-constructs.JsiiProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@nikovirtala/projen-constructs.JsiiProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@nikovirtala/projen-constructs.JsiiProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@nikovirtala/projen-constructs.JsiiProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@nikovirtala/projen-constructs.JsiiProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@nikovirtala/projen-constructs.JsiiProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@nikovirtala/projen-constructs.JsiiProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@nikovirtala/projen-constructs.JsiiProject.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@nikovirtala/projen-constructs.JsiiProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@nikovirtala/projen-constructs.JsiiProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@nikovirtala/projen-constructs.JsiiProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `biome`<sup>Optional</sup> <a name="biome" id="@nikovirtala/projen-constructs.JsiiProject.property.biome"></a>

```typescript
public readonly biome: Biome;
```

- *Type:* projen.javascript.Biome

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@nikovirtala/projen-constructs.JsiiProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@nikovirtala/projen-constructs.JsiiProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@nikovirtala/projen-constructs.JsiiProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@nikovirtala/projen-constructs.JsiiProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@nikovirtala/projen-constructs.JsiiProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@nikovirtala/projen-constructs.JsiiProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@nikovirtala/projen-constructs.JsiiProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### `release`<sup>Optional</sup> <a name="release" id="@nikovirtala/projen-constructs.JsiiProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@nikovirtala/projen-constructs.JsiiProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@nikovirtala/projen-constructs.JsiiProject.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@nikovirtala/projen-constructs.JsiiProject.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `runner`<sup>Required</sup> <a name="runner" id="@nikovirtala/projen-constructs.JsiiProject.property.runner"></a>

```typescript
public readonly runner: TypeScriptRunner;
```

- *Type:* projen.typescript.TypeScriptRunner

The TypeScript runner used for executing TypeScript files.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@nikovirtala/projen-constructs.JsiiProject.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@nikovirtala/projen-constructs.JsiiProject.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@nikovirtala/projen-constructs.JsiiProject.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@nikovirtala/projen-constructs.JsiiProject.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@nikovirtala/projen-constructs.JsiiProject.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@nikovirtala/projen-constructs.JsiiProject.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@nikovirtala/projen-constructs.JsiiProject.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@nikovirtala/projen-constructs.JsiiProject.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@nikovirtala/projen-constructs.JsiiProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="@nikovirtala/projen-constructs.JsiiProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

### LambdaFunctionCodeBundle <a name="LambdaFunctionCodeBundle" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundle"></a>

#### Initializers <a name="Initializers" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundle.Initializer"></a>

```typescript
import { LambdaFunctionCodeBundle } from '@nikovirtala/projen-constructs'

new LambdaFunctionCodeBundle(project: Project, options: LambdaFunctionCodeBundleOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundle.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundle.Initializer.parameter.options">options</a></code> | <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundleOptions">LambdaFunctionCodeBundleOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundle.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Required</sup> <a name="options" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundle.Initializer.parameter.options"></a>

- *Type:* <a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundleOptions">LambdaFunctionCodeBundleOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundle.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundle.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundle.postProjectCreation">postProjectCreation</a></code> | Called once, right after `postSynthesize()`, only when the project is created for the first time. |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundle.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundle.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundle.projectCreation">projectCreation</a></code> | Called once, right after `synthesize()`, only when the project is created for the first time. |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundle.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundle.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundle.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundle.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postProjectCreation` <a name="postProjectCreation" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundle.postProjectCreation"></a>

```typescript
public postProjectCreation(initProject: InitProject): void
```

Called once, right after `postSynthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
It is also skipped when post-synthesis steps are disabled, e.g. `--no-post` or `PROJEN_DISABLE_POST`.
Use it for one-off setup that can be turned off by the user, like running a task to give the user immediate
feedback on their new project. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundle.postProjectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `postSynthesize` <a name="postSynthesize" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundle.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundle.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `projectCreation` <a name="projectCreation" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundle.projectCreation"></a>

```typescript
public projectCreation(initProject: InitProject): void
```

Called once, right after `synthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
Use it for deterministic, one-off file generation. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundle.projectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `synthesize` <a name="synthesize" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundle.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundle.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundle.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundle.isConstruct"></a>

```typescript
import { LambdaFunctionCodeBundle } from '@nikovirtala/projen-constructs'

LambdaFunctionCodeBundle.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundle.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundle.isComponent"></a>

```typescript
import { LambdaFunctionCodeBundle } from '@nikovirtala/projen-constructs'

LambdaFunctionCodeBundle.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundle.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundle.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundle.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundle.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundle.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### LambdaFunctionCodeBundler <a name="LambdaFunctionCodeBundler" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundler"></a>

#### Initializers <a name="Initializers" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundler.Initializer"></a>

```typescript
import { LambdaFunctionCodeBundler } from '@nikovirtala/projen-constructs'

new LambdaFunctionCodeBundler(project: Project, options: LambdaFunctionCodeBundlerOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundler.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundler.Initializer.parameter.options">options</a></code> | <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundlerOptions">LambdaFunctionCodeBundlerOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundler.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Required</sup> <a name="options" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundler.Initializer.parameter.options"></a>

- *Type:* <a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundlerOptions">LambdaFunctionCodeBundlerOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundler.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundler.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundler.postProjectCreation">postProjectCreation</a></code> | Called once, right after `postSynthesize()`, only when the project is created for the first time. |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundler.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundler.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundler.projectCreation">projectCreation</a></code> | Called once, right after `synthesize()`, only when the project is created for the first time. |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundler.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundler.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundler.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundler.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postProjectCreation` <a name="postProjectCreation" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundler.postProjectCreation"></a>

```typescript
public postProjectCreation(initProject: InitProject): void
```

Called once, right after `postSynthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
It is also skipped when post-synthesis steps are disabled, e.g. `--no-post` or `PROJEN_DISABLE_POST`.
Use it for one-off setup that can be turned off by the user, like running a task to give the user immediate
feedback on their new project. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundler.postProjectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `postSynthesize` <a name="postSynthesize" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundler.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundler.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `projectCreation` <a name="projectCreation" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundler.projectCreation"></a>

```typescript
public projectCreation(initProject: InitProject): void
```

Called once, right after `synthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
Use it for deterministic, one-off file generation. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundler.projectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `synthesize` <a name="synthesize" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundler.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundler.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundler.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundler.isConstruct"></a>

```typescript
import { LambdaFunctionCodeBundler } from '@nikovirtala/projen-constructs'

LambdaFunctionCodeBundler.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundler.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundler.isComponent"></a>

```typescript
import { LambdaFunctionCodeBundler } from '@nikovirtala/projen-constructs'

LambdaFunctionCodeBundler.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundler.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundler.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundler.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundler.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundler.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### LambdaFunctionConstructGenerator <a name="LambdaFunctionConstructGenerator" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator"></a>

#### Initializers <a name="Initializers" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.Initializer"></a>

```typescript
import { LambdaFunctionConstructGenerator } from '@nikovirtala/projen-constructs'

new LambdaFunctionConstructGenerator(project: NodeProject, options?: LambdaFunctionConstructGeneratorOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.Initializer.parameter.project">project</a></code> | <code>projen.javascript.NodeProject</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.Initializer.parameter.options">options</a></code> | <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionConstructGeneratorOptions">LambdaFunctionConstructGeneratorOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.Initializer.parameter.project"></a>

- *Type:* projen.javascript.NodeProject

---

##### `options`<sup>Optional</sup> <a name="options" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.Initializer.parameter.options"></a>

- *Type:* <a href="#@nikovirtala/projen-constructs.LambdaFunctionConstructGeneratorOptions">LambdaFunctionConstructGeneratorOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.postProjectCreation">postProjectCreation</a></code> | Called once, right after `postSynthesize()`, only when the project is created for the first time. |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.projectCreation">projectCreation</a></code> | Called once, right after `synthesize()`, only when the project is created for the first time. |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postProjectCreation` <a name="postProjectCreation" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.postProjectCreation"></a>

```typescript
public postProjectCreation(initProject: InitProject): void
```

Called once, right after `postSynthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
It is also skipped when post-synthesis steps are disabled, e.g. `--no-post` or `PROJEN_DISABLE_POST`.
Use it for one-off setup that can be turned off by the user, like running a task to give the user immediate
feedback on their new project. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.postProjectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `postSynthesize` <a name="postSynthesize" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `projectCreation` <a name="projectCreation" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.projectCreation"></a>

```typescript
public projectCreation(initProject: InitProject): void
```

Called once, right after `synthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
Use it for deterministic, one-off file generation. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.projectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `synthesize` <a name="synthesize" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.isConstruct"></a>

```typescript
import { LambdaFunctionConstructGenerator } from '@nikovirtala/projen-constructs'

LambdaFunctionConstructGenerator.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.isComponent"></a>

```typescript
import { LambdaFunctionConstructGenerator } from '@nikovirtala/projen-constructs'

LambdaFunctionConstructGenerator.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.property.esbuildOptions">esbuildOptions</a></code> | <code>@mrgrain/cdk-esbuild.BuildOptions</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.property.filePattern">filePattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.property.outputDir">outputDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.property.sourceDir">sourceDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.property.baseConstructClass">baseConstructClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.property.baseConstructImport">baseConstructImport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.property.baseConstructPackage">baseConstructPackage</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `esbuildOptions`<sup>Required</sup> <a name="esbuildOptions" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.property.esbuildOptions"></a>

```typescript
public readonly esbuildOptions: BuildOptions;
```

- *Type:* @mrgrain/cdk-esbuild.BuildOptions

---

##### `filePattern`<sup>Required</sup> <a name="filePattern" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.property.filePattern"></a>

```typescript
public readonly filePattern: string;
```

- *Type:* string

---

##### `outputDir`<sup>Required</sup> <a name="outputDir" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.property.outputDir"></a>

```typescript
public readonly outputDir: string;
```

- *Type:* string

---

##### `sourceDir`<sup>Required</sup> <a name="sourceDir" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.property.sourceDir"></a>

```typescript
public readonly sourceDir: string;
```

- *Type:* string

---

##### `baseConstructClass`<sup>Optional</sup> <a name="baseConstructClass" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.property.baseConstructClass"></a>

```typescript
public readonly baseConstructClass: string;
```

- *Type:* string

---

##### `baseConstructImport`<sup>Optional</sup> <a name="baseConstructImport" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.property.baseConstructImport"></a>

```typescript
public readonly baseConstructImport: string;
```

- *Type:* string

---

##### `baseConstructPackage`<sup>Optional</sup> <a name="baseConstructPackage" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGenerator.property.baseConstructPackage"></a>

```typescript
public readonly baseConstructPackage: string;
```

- *Type:* string

---


### LocalStack <a name="LocalStack" id="@nikovirtala/projen-constructs.LocalStack"></a>

#### Initializers <a name="Initializers" id="@nikovirtala/projen-constructs.LocalStack.Initializer"></a>

```typescript
import { LocalStack } from '@nikovirtala/projen-constructs'

new LocalStack(scope: IConstruct, options?: LocalStackOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.LocalStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.IConstruct</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.LocalStack.Initializer.parameter.options">options</a></code> | <code><a href="#@nikovirtala/projen-constructs.LocalStackOptions">LocalStackOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@nikovirtala/projen-constructs.LocalStack.Initializer.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

##### `options`<sup>Optional</sup> <a name="options" id="@nikovirtala/projen-constructs.LocalStack.Initializer.parameter.options"></a>

- *Type:* <a href="#@nikovirtala/projen-constructs.LocalStackOptions">LocalStackOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.LocalStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@nikovirtala/projen-constructs.LocalStack.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@nikovirtala/projen-constructs.LocalStack.postProjectCreation">postProjectCreation</a></code> | Called once, right after `postSynthesize()`, only when the project is created for the first time. |
| <code><a href="#@nikovirtala/projen-constructs.LocalStack.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@nikovirtala/projen-constructs.LocalStack.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@nikovirtala/projen-constructs.LocalStack.projectCreation">projectCreation</a></code> | Called once, right after `synthesize()`, only when the project is created for the first time. |
| <code><a href="#@nikovirtala/projen-constructs.LocalStack.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@nikovirtala/projen-constructs.LocalStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@nikovirtala/projen-constructs.LocalStack.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@nikovirtala/projen-constructs.LocalStack.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postProjectCreation` <a name="postProjectCreation" id="@nikovirtala/projen-constructs.LocalStack.postProjectCreation"></a>

```typescript
public postProjectCreation(initProject: InitProject): void
```

Called once, right after `postSynthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
It is also skipped when post-synthesis steps are disabled, e.g. `--no-post` or `PROJEN_DISABLE_POST`.
Use it for one-off setup that can be turned off by the user, like running a task to give the user immediate
feedback on their new project. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@nikovirtala/projen-constructs.LocalStack.postProjectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `postSynthesize` <a name="postSynthesize" id="@nikovirtala/projen-constructs.LocalStack.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@nikovirtala/projen-constructs.LocalStack.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `projectCreation` <a name="projectCreation" id="@nikovirtala/projen-constructs.LocalStack.projectCreation"></a>

```typescript
public projectCreation(initProject: InitProject): void
```

Called once, right after `synthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
Use it for deterministic, one-off file generation. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@nikovirtala/projen-constructs.LocalStack.projectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `synthesize` <a name="synthesize" id="@nikovirtala/projen-constructs.LocalStack.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.LocalStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@nikovirtala/projen-constructs.LocalStack.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@nikovirtala/projen-constructs.LocalStack.isConstruct"></a>

```typescript
import { LocalStack } from '@nikovirtala/projen-constructs'

LocalStack.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-constructs.LocalStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@nikovirtala/projen-constructs.LocalStack.isComponent"></a>

```typescript
import { LocalStack } from '@nikovirtala/projen-constructs'

LocalStack.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-constructs.LocalStack.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.LocalStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@nikovirtala/projen-constructs.LocalStack.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@nikovirtala/projen-constructs.LocalStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-constructs.LocalStack.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### Mise <a name="Mise" id="@nikovirtala/projen-constructs.Mise"></a>

#### Initializers <a name="Initializers" id="@nikovirtala/projen-constructs.Mise.Initializer"></a>

```typescript
import { Mise } from '@nikovirtala/projen-constructs'

new Mise(project: Project, options?: MiseOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.Mise.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.Mise.Initializer.parameter.options">options</a></code> | <code><a href="#@nikovirtala/projen-constructs.MiseOptions">MiseOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-constructs.Mise.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="@nikovirtala/projen-constructs.Mise.Initializer.parameter.options"></a>

- *Type:* <a href="#@nikovirtala/projen-constructs.MiseOptions">MiseOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.Mise.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@nikovirtala/projen-constructs.Mise.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@nikovirtala/projen-constructs.Mise.postProjectCreation">postProjectCreation</a></code> | Called once, right after `postSynthesize()`, only when the project is created for the first time. |
| <code><a href="#@nikovirtala/projen-constructs.Mise.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@nikovirtala/projen-constructs.Mise.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@nikovirtala/projen-constructs.Mise.projectCreation">projectCreation</a></code> | Called once, right after `synthesize()`, only when the project is created for the first time. |
| <code><a href="#@nikovirtala/projen-constructs.Mise.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@nikovirtala/projen-constructs.Mise.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@nikovirtala/projen-constructs.Mise.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@nikovirtala/projen-constructs.Mise.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postProjectCreation` <a name="postProjectCreation" id="@nikovirtala/projen-constructs.Mise.postProjectCreation"></a>

```typescript
public postProjectCreation(initProject: InitProject): void
```

Called once, right after `postSynthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
It is also skipped when post-synthesis steps are disabled, e.g. `--no-post` or `PROJEN_DISABLE_POST`.
Use it for one-off setup that can be turned off by the user, like running a task to give the user immediate
feedback on their new project. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@nikovirtala/projen-constructs.Mise.postProjectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `postSynthesize` <a name="postSynthesize" id="@nikovirtala/projen-constructs.Mise.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@nikovirtala/projen-constructs.Mise.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `projectCreation` <a name="projectCreation" id="@nikovirtala/projen-constructs.Mise.projectCreation"></a>

```typescript
public projectCreation(initProject: InitProject): void
```

Called once, right after `synthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
Use it for deterministic, one-off file generation. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@nikovirtala/projen-constructs.Mise.projectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `synthesize` <a name="synthesize" id="@nikovirtala/projen-constructs.Mise.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.Mise.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@nikovirtala/projen-constructs.Mise.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@nikovirtala/projen-constructs.Mise.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@nikovirtala/projen-constructs.Mise.isConstruct"></a>

```typescript
import { Mise } from '@nikovirtala/projen-constructs'

Mise.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-constructs.Mise.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@nikovirtala/projen-constructs.Mise.isComponent"></a>

```typescript
import { Mise } from '@nikovirtala/projen-constructs'

Mise.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-constructs.Mise.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@nikovirtala/projen-constructs.Mise.of"></a>

```typescript
import { Mise } from '@nikovirtala/projen-constructs'

Mise.of(project: Project)
```

###### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-constructs.Mise.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.Mise.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@nikovirtala/projen-constructs.Mise.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@nikovirtala/projen-constructs.Mise.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-constructs.Mise.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### ProjectGenerator <a name="ProjectGenerator" id="@nikovirtala/projen-constructs.ProjectGenerator"></a>

Projen component that generates TypeScript project classes with standard configuration.

This component automates the creation of project classes that extend Projen base classes
with opinionated defaults and component integration.

#### Initializers <a name="Initializers" id="@nikovirtala/projen-constructs.ProjectGenerator.Initializer"></a>

```typescript
import { ProjectGenerator } from '@nikovirtala/projen-constructs'

new ProjectGenerator(project: Project, options: ProjectGeneratorOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.ProjectGenerator.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | - Projen project instance. |
| <code><a href="#@nikovirtala/projen-constructs.ProjectGenerator.Initializer.parameter.options">options</a></code> | <code><a href="#@nikovirtala/projen-constructs.ProjectGeneratorOptions">ProjectGeneratorOptions</a></code> | - Generator configuration. |

---

##### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-constructs.ProjectGenerator.Initializer.parameter.project"></a>

- *Type:* projen.Project

Projen project instance.

---

##### `options`<sup>Required</sup> <a name="options" id="@nikovirtala/projen-constructs.ProjectGenerator.Initializer.parameter.options"></a>

- *Type:* <a href="#@nikovirtala/projen-constructs.ProjectGeneratorOptions">ProjectGeneratorOptions</a>

Generator configuration.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.ProjectGenerator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@nikovirtala/projen-constructs.ProjectGenerator.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@nikovirtala/projen-constructs.ProjectGenerator.postProjectCreation">postProjectCreation</a></code> | Called once, right after `postSynthesize()`, only when the project is created for the first time. |
| <code><a href="#@nikovirtala/projen-constructs.ProjectGenerator.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@nikovirtala/projen-constructs.ProjectGenerator.preSynthesize">preSynthesize</a></code> | Generates the TypeScript class file during Projen synthesis. |
| <code><a href="#@nikovirtala/projen-constructs.ProjectGenerator.projectCreation">projectCreation</a></code> | Called once, right after `synthesize()`, only when the project is created for the first time. |
| <code><a href="#@nikovirtala/projen-constructs.ProjectGenerator.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@nikovirtala/projen-constructs.ProjectGenerator.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@nikovirtala/projen-constructs.ProjectGenerator.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@nikovirtala/projen-constructs.ProjectGenerator.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postProjectCreation` <a name="postProjectCreation" id="@nikovirtala/projen-constructs.ProjectGenerator.postProjectCreation"></a>

```typescript
public postProjectCreation(initProject: InitProject): void
```

Called once, right after `postSynthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
It is also skipped when post-synthesis steps are disabled, e.g. `--no-post` or `PROJEN_DISABLE_POST`.
Use it for one-off setup that can be turned off by the user, like running a task to give the user immediate
feedback on their new project. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@nikovirtala/projen-constructs.ProjectGenerator.postProjectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `postSynthesize` <a name="postSynthesize" id="@nikovirtala/projen-constructs.ProjectGenerator.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@nikovirtala/projen-constructs.ProjectGenerator.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Generates the TypeScript class file during Projen synthesis.

Called by Projen during the synthesis phase to generate the project class file.
The file is marked as readonly to prevent manual editing.

##### `projectCreation` <a name="projectCreation" id="@nikovirtala/projen-constructs.ProjectGenerator.projectCreation"></a>

```typescript
public projectCreation(initProject: InitProject): void
```

Called once, right after `synthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
Use it for deterministic, one-off file generation. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@nikovirtala/projen-constructs.ProjectGenerator.projectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `synthesize` <a name="synthesize" id="@nikovirtala/projen-constructs.ProjectGenerator.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.ProjectGenerator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@nikovirtala/projen-constructs.ProjectGenerator.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@nikovirtala/projen-constructs.ProjectGenerator.isConstruct"></a>

```typescript
import { ProjectGenerator } from '@nikovirtala/projen-constructs'

ProjectGenerator.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-constructs.ProjectGenerator.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@nikovirtala/projen-constructs.ProjectGenerator.isComponent"></a>

```typescript
import { ProjectGenerator } from '@nikovirtala/projen-constructs'

ProjectGenerator.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-constructs.ProjectGenerator.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.ProjectGenerator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@nikovirtala/projen-constructs.ProjectGenerator.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@nikovirtala/projen-constructs.ProjectGenerator.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-constructs.ProjectGenerator.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


### TypeDoc <a name="TypeDoc" id="@nikovirtala/projen-constructs.TypeDoc"></a>

TypeDoc component for projen projects.

#### Initializers <a name="Initializers" id="@nikovirtala/projen-constructs.TypeDoc.Initializer"></a>

```typescript
import { TypeDoc } from '@nikovirtala/projen-constructs'

new TypeDoc(project: NodeProject, options?: TypeDocOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.TypeDoc.Initializer.parameter.project">project</a></code> | <code>projen.javascript.NodeProject</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.TypeDoc.Initializer.parameter.options">options</a></code> | <code><a href="#@nikovirtala/projen-constructs.TypeDocOptions">TypeDocOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-constructs.TypeDoc.Initializer.parameter.project"></a>

- *Type:* projen.javascript.NodeProject

---

##### `options`<sup>Optional</sup> <a name="options" id="@nikovirtala/projen-constructs.TypeDoc.Initializer.parameter.options"></a>

- *Type:* <a href="#@nikovirtala/projen-constructs.TypeDocOptions">TypeDocOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.TypeDoc.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDoc.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDoc.postProjectCreation">postProjectCreation</a></code> | Called once, right after `postSynthesize()`, only when the project is created for the first time. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDoc.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDoc.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDoc.projectCreation">projectCreation</a></code> | Called once, right after `synthesize()`, only when the project is created for the first time. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDoc.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@nikovirtala/projen-constructs.TypeDoc.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@nikovirtala/projen-constructs.TypeDoc.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@nikovirtala/projen-constructs.TypeDoc.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postProjectCreation` <a name="postProjectCreation" id="@nikovirtala/projen-constructs.TypeDoc.postProjectCreation"></a>

```typescript
public postProjectCreation(initProject: InitProject): void
```

Called once, right after `postSynthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
It is also skipped when post-synthesis steps are disabled, e.g. `--no-post` or `PROJEN_DISABLE_POST`.
Use it for one-off setup that can be turned off by the user, like running a task to give the user immediate
feedback on their new project. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@nikovirtala/projen-constructs.TypeDoc.postProjectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `postSynthesize` <a name="postSynthesize" id="@nikovirtala/projen-constructs.TypeDoc.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@nikovirtala/projen-constructs.TypeDoc.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `projectCreation` <a name="projectCreation" id="@nikovirtala/projen-constructs.TypeDoc.projectCreation"></a>

```typescript
public projectCreation(initProject: InitProject): void
```

Called once, right after `synthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
Use it for deterministic, one-off file generation. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@nikovirtala/projen-constructs.TypeDoc.projectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `synthesize` <a name="synthesize" id="@nikovirtala/projen-constructs.TypeDoc.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.TypeDoc.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDoc.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDoc.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@nikovirtala/projen-constructs.TypeDoc.isConstruct"></a>

```typescript
import { TypeDoc } from '@nikovirtala/projen-constructs'

TypeDoc.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-constructs.TypeDoc.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@nikovirtala/projen-constructs.TypeDoc.isComponent"></a>

```typescript
import { TypeDoc } from '@nikovirtala/projen-constructs'

TypeDoc.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-constructs.TypeDoc.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@nikovirtala/projen-constructs.TypeDoc.of"></a>

```typescript
import { TypeDoc } from '@nikovirtala/projen-constructs'

TypeDoc.of(project: Project)
```

###### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-constructs.TypeDoc.of.parameter.project"></a>

- *Type:* projen.Project

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.TypeDoc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDoc.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.TypeDoc.property.file">file</a></code> | <code>projen.JsonFile</code> | TypeDoc configuration file. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDoc.property.task">task</a></code> | <code>projen.Task</code> | TypeDoc task. |

---

##### `node`<sup>Required</sup> <a name="node" id="@nikovirtala/projen-constructs.TypeDoc.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-constructs.TypeDoc.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `file`<sup>Required</sup> <a name="file" id="@nikovirtala/projen-constructs.TypeDoc.property.file"></a>

```typescript
public readonly file: JsonFile;
```

- *Type:* projen.JsonFile

TypeDoc configuration file.

---

##### `task`<sup>Required</sup> <a name="task" id="@nikovirtala/projen-constructs.TypeDoc.property.task"></a>

```typescript
public readonly task: Task;
```

- *Type:* projen.Task

TypeDoc task.

---


### TypeScriptProject <a name="TypeScriptProject" id="@nikovirtala/projen-constructs.TypeScriptProject"></a>

TypeScriptProject with standard configuration and component integration.

Extends Projen's base class with opinionated defaults and automatic component setup.

#### Initializers <a name="Initializers" id="@nikovirtala/projen-constructs.TypeScriptProject.Initializer"></a>

```typescript
import { TypeScriptProject } from '@nikovirtala/projen-constructs'

new TypeScriptProject(options: TypeScriptProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.Initializer.parameter.options">options</a></code> | <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions">TypeScriptProjectOptions</a></code> | - Project configuration. |

---

##### `options`<sup>Required</sup> <a name="options" id="@nikovirtala/projen-constructs.TypeScriptProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions">TypeScriptProjectOptions</a>

Project configuration.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `toString` <a name="toString" id="@nikovirtala/projen-constructs.TypeScriptProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@nikovirtala/projen-constructs.TypeScriptProject.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@nikovirtala/projen-constructs.TypeScriptProject.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@nikovirtala/projen-constructs.TypeScriptProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@nikovirtala/projen-constructs.TypeScriptProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@nikovirtala/projen-constructs.TypeScriptProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@nikovirtala/projen-constructs.TypeScriptProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@nikovirtala/projen-constructs.TypeScriptProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@nikovirtala/projen-constructs.TypeScriptProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="@nikovirtala/projen-constructs.TypeScriptProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@nikovirtala/projen-constructs.TypeScriptProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@nikovirtala/projen-constructs.TypeScriptProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@nikovirtala/projen-constructs.TypeScriptProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@nikovirtala/projen-constructs.TypeScriptProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@nikovirtala/projen-constructs.TypeScriptProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@nikovirtala/projen-constructs.TypeScriptProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@nikovirtala/projen-constructs.TypeScriptProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@nikovirtala/projen-constructs.TypeScriptProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@nikovirtala/projen-constructs.TypeScriptProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `pnpm projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@nikovirtala/projen-constructs.TypeScriptProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@nikovirtala/projen-constructs.TypeScriptProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "projectCreation()" for all components, only if the project is being created for the first time
6. Call "postSynthesize()" for all components of this project
7. Call "this.postSynthesize()"
8. Call "postProjectCreation()" for all components, only if the project is being created for the first time

##### `tryFindFile` <a name="tryFindFile" id="@nikovirtala/projen-constructs.TypeScriptProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@nikovirtala/projen-constructs.TypeScriptProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@nikovirtala/projen-constructs.TypeScriptProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@nikovirtala/projen-constructs.TypeScriptProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@nikovirtala/projen-constructs.TypeScriptProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@nikovirtala/projen-constructs.TypeScriptProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@nikovirtala/projen-constructs.TypeScriptProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@nikovirtala/projen-constructs.TypeScriptProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@nikovirtala/projen-constructs.TypeScriptProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: ...string[]): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@nikovirtala/projen-constructs.TypeScriptProject.addBundledDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDeps` <a name="addDeps" id="@nikovirtala/projen-constructs.TypeScriptProject.addDeps"></a>

```typescript
public addDeps(deps: ...string[]): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@nikovirtala/projen-constructs.TypeScriptProject.addDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@nikovirtala/projen-constructs.TypeScriptProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: ...string[]): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@nikovirtala/projen-constructs.TypeScriptProject.addDevDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@nikovirtala/projen-constructs.TypeScriptProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@nikovirtala/projen-constructs.TypeScriptProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@nikovirtala/projen-constructs.TypeScriptProject.addKeywords"></a>

```typescript
public addKeywords(keywords: ...string[]): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@nikovirtala/projen-constructs.TypeScriptProject.addKeywords.parameter.keywords"></a>

- *Type:* ...string[]

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@nikovirtala/projen-constructs.TypeScriptProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: ...string[]): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@nikovirtala/projen-constructs.TypeScriptProject.addPeerDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `pnpm projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `pnpm
add/update`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@nikovirtala/projen-constructs.TypeScriptProject.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@nikovirtala/projen-constructs.TypeScriptProject.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### `removeScript` <a name="removeScript" id="@nikovirtala/projen-constructs.TypeScriptProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@nikovirtala/projen-constructs.TypeScriptProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@nikovirtala/projen-constructs.TypeScriptProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@nikovirtala/projen-constructs.TypeScriptProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@nikovirtala/projen-constructs.TypeScriptProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@nikovirtala/projen-constructs.TypeScriptProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@nikovirtala/projen-constructs.TypeScriptProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@nikovirtala/projen-constructs.TypeScriptProject.isConstruct"></a>

```typescript
import { TypeScriptProject } from '@nikovirtala/projen-constructs'

TypeScriptProject.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-constructs.TypeScriptProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@nikovirtala/projen-constructs.TypeScriptProject.isProject"></a>

```typescript
import { TypeScriptProject } from '@nikovirtala/projen-constructs'

TypeScriptProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-constructs.TypeScriptProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@nikovirtala/projen-constructs.TypeScriptProject.of"></a>

```typescript
import { TypeScriptProject } from '@nikovirtala/projen-constructs'

TypeScriptProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@nikovirtala/projen-constructs.TypeScriptProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.biome">biome</a></code> | <code>projen.javascript.Biome</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version supported by this package. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.runner">runner</a></code> | <code>projen.typescript.TypeScriptRunner</code> | The TypeScript runner used for executing TypeScript files. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@nikovirtala/projen-constructs.TypeScriptProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@nikovirtala/projen-constructs.TypeScriptProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@nikovirtala/projen-constructs.TypeScriptProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@nikovirtala/projen-constructs.TypeScriptProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@nikovirtala/projen-constructs.TypeScriptProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@nikovirtala/projen-constructs.TypeScriptProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@nikovirtala/projen-constructs.TypeScriptProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@nikovirtala/projen-constructs.TypeScriptProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@nikovirtala/projen-constructs.TypeScriptProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@nikovirtala/projen-constructs.TypeScriptProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@nikovirtala/projen-constructs.TypeScriptProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@nikovirtala/projen-constructs.TypeScriptProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@nikovirtala/projen-constructs.TypeScriptProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@nikovirtala/projen-constructs.TypeScriptProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@nikovirtala/projen-constructs.TypeScriptProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@nikovirtala/projen-constructs.TypeScriptProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@nikovirtala/projen-constructs.TypeScriptProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@nikovirtala/projen-constructs.TypeScriptProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@nikovirtala/projen-constructs.TypeScriptProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@nikovirtala/projen-constructs.TypeScriptProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@nikovirtala/projen-constructs.TypeScriptProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@nikovirtala/projen-constructs.TypeScriptProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@nikovirtala/projen-constructs.TypeScriptProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### ~~`initProject`~~<sup>Optional</sup> <a name="initProject" id="@nikovirtala/projen-constructs.TypeScriptProject.property.initProject"></a>

- *Deprecated:* use the `initProject` argument passed to `Component.projectCreation()` instead.

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@nikovirtala/projen-constructs.TypeScriptProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@nikovirtala/projen-constructs.TypeScriptProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@nikovirtala/projen-constructs.TypeScriptProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@nikovirtala/projen-constructs.TypeScriptProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@nikovirtala/projen-constructs.TypeScriptProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@nikovirtala/projen-constructs.TypeScriptProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@nikovirtala/projen-constructs.TypeScriptProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@nikovirtala/projen-constructs.TypeScriptProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@nikovirtala/projen-constructs.TypeScriptProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@nikovirtala/projen-constructs.TypeScriptProject.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@nikovirtala/projen-constructs.TypeScriptProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@nikovirtala/projen-constructs.TypeScriptProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@nikovirtala/projen-constructs.TypeScriptProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `biome`<sup>Optional</sup> <a name="biome" id="@nikovirtala/projen-constructs.TypeScriptProject.property.biome"></a>

```typescript
public readonly biome: Biome;
```

- *Type:* projen.javascript.Biome

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@nikovirtala/projen-constructs.TypeScriptProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@nikovirtala/projen-constructs.TypeScriptProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@nikovirtala/projen-constructs.TypeScriptProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@nikovirtala/projen-constructs.TypeScriptProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@nikovirtala/projen-constructs.TypeScriptProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@nikovirtala/projen-constructs.TypeScriptProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@nikovirtala/projen-constructs.TypeScriptProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### `release`<sup>Optional</sup> <a name="release" id="@nikovirtala/projen-constructs.TypeScriptProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@nikovirtala/projen-constructs.TypeScriptProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@nikovirtala/projen-constructs.TypeScriptProject.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@nikovirtala/projen-constructs.TypeScriptProject.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `runner`<sup>Required</sup> <a name="runner" id="@nikovirtala/projen-constructs.TypeScriptProject.property.runner"></a>

```typescript
public readonly runner: TypeScriptRunner;
```

- *Type:* projen.typescript.TypeScriptRunner

The TypeScript runner used for executing TypeScript files.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@nikovirtala/projen-constructs.TypeScriptProject.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@nikovirtala/projen-constructs.TypeScriptProject.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@nikovirtala/projen-constructs.TypeScriptProject.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@nikovirtala/projen-constructs.TypeScriptProject.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@nikovirtala/projen-constructs.TypeScriptProject.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@nikovirtala/projen-constructs.TypeScriptProject.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@nikovirtala/projen-constructs.TypeScriptProject.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@nikovirtala/projen-constructs.TypeScriptProject.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@nikovirtala/projen-constructs.TypeScriptProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="@nikovirtala/projen-constructs.TypeScriptProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

### Vitest <a name="Vitest" id="@nikovirtala/projen-constructs.Vitest"></a>

#### Initializers <a name="Initializers" id="@nikovirtala/projen-constructs.Vitest.Initializer"></a>

```typescript
import { Vitest } from '@nikovirtala/projen-constructs'

new Vitest(project: NodeProject, options?: VitestOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.Vitest.Initializer.parameter.project">project</a></code> | <code>projen.javascript.NodeProject</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.Vitest.Initializer.parameter.options">options</a></code> | <code><a href="#@nikovirtala/projen-constructs.VitestOptions">VitestOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-constructs.Vitest.Initializer.parameter.project"></a>

- *Type:* projen.javascript.NodeProject

---

##### `options`<sup>Optional</sup> <a name="options" id="@nikovirtala/projen-constructs.Vitest.Initializer.parameter.options"></a>

- *Type:* <a href="#@nikovirtala/projen-constructs.VitestOptions">VitestOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.Vitest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@nikovirtala/projen-constructs.Vitest.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@nikovirtala/projen-constructs.Vitest.postProjectCreation">postProjectCreation</a></code> | Called once, right after `postSynthesize()`, only when the project is created for the first time. |
| <code><a href="#@nikovirtala/projen-constructs.Vitest.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@nikovirtala/projen-constructs.Vitest.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@nikovirtala/projen-constructs.Vitest.projectCreation">projectCreation</a></code> | Called once, right after `synthesize()`, only when the project is created for the first time. |
| <code><a href="#@nikovirtala/projen-constructs.Vitest.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |
| <code><a href="#@nikovirtala/projen-constructs.Vitest.addExclude">addExclude</a></code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.Vitest.addInclude">addInclude</a></code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.Vitest.configureCoverageProvider">configureCoverageProvider</a></code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.Vitest.configureCoverageReporters">configureCoverageReporters</a></code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.Vitest.configureEnvironment">configureEnvironment</a></code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.Vitest.configureGlobals">configureGlobals</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@nikovirtala/projen-constructs.Vitest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@nikovirtala/projen-constructs.Vitest.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@nikovirtala/projen-constructs.Vitest.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `postProjectCreation` <a name="postProjectCreation" id="@nikovirtala/projen-constructs.Vitest.postProjectCreation"></a>

```typescript
public postProjectCreation(initProject: InitProject): void
```

Called once, right after `postSynthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
It is also skipped when post-synthesis steps are disabled, e.g. `--no-post` or `PROJEN_DISABLE_POST`.
Use it for one-off setup that can be turned off by the user, like running a task to give the user immediate
feedback on their new project. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@nikovirtala/projen-constructs.Vitest.postProjectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `postSynthesize` <a name="postSynthesize" id="@nikovirtala/projen-constructs.Vitest.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@nikovirtala/projen-constructs.Vitest.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `projectCreation` <a name="projectCreation" id="@nikovirtala/projen-constructs.Vitest.projectCreation"></a>

```typescript
public projectCreation(initProject: InitProject): void
```

Called once, right after `synthesize()`, only when the project is created for the first time.

It does not run on later `projen` invocations. It only fires for `projen new` (or `Projects.createProject`).
Use it for deterministic, one-off file generation. Order across components is not guaranteed.

###### `initProject`<sup>Required</sup> <a name="initProject" id="@nikovirtala/projen-constructs.Vitest.projectCreation.parameter.initProject"></a>

- *Type:* projen.InitProject

Details about how the project was created, e.g. its type and the original CLI args.

---

##### `synthesize` <a name="synthesize" id="@nikovirtala/projen-constructs.Vitest.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

##### `addExclude` <a name="addExclude" id="@nikovirtala/projen-constructs.Vitest.addExclude"></a>

```typescript
public addExclude(pattern: string): void
```

###### `pattern`<sup>Required</sup> <a name="pattern" id="@nikovirtala/projen-constructs.Vitest.addExclude.parameter.pattern"></a>

- *Type:* string

---

##### `addInclude` <a name="addInclude" id="@nikovirtala/projen-constructs.Vitest.addInclude"></a>

```typescript
public addInclude(pattern: string): void
```

###### `pattern`<sup>Required</sup> <a name="pattern" id="@nikovirtala/projen-constructs.Vitest.addInclude.parameter.pattern"></a>

- *Type:* string

---

##### `configureCoverageProvider` <a name="configureCoverageProvider" id="@nikovirtala/projen-constructs.Vitest.configureCoverageProvider"></a>

```typescript
public configureCoverageProvider(provider: CoverageProvider): void
```

###### `provider`<sup>Required</sup> <a name="provider" id="@nikovirtala/projen-constructs.Vitest.configureCoverageProvider.parameter.provider"></a>

- *Type:* <a href="#@nikovirtala/projen-constructs.CoverageProvider">CoverageProvider</a>

---

##### `configureCoverageReporters` <a name="configureCoverageReporters" id="@nikovirtala/projen-constructs.Vitest.configureCoverageReporters"></a>

```typescript
public configureCoverageReporters(reporters: CoverageReporter[]): void
```

###### `reporters`<sup>Required</sup> <a name="reporters" id="@nikovirtala/projen-constructs.Vitest.configureCoverageReporters.parameter.reporters"></a>

- *Type:* <a href="#@nikovirtala/projen-constructs.CoverageReporter">CoverageReporter</a>[]

---

##### `configureEnvironment` <a name="configureEnvironment" id="@nikovirtala/projen-constructs.Vitest.configureEnvironment"></a>

```typescript
public configureEnvironment(environment: Environment): void
```

###### `environment`<sup>Required</sup> <a name="environment" id="@nikovirtala/projen-constructs.Vitest.configureEnvironment.parameter.environment"></a>

- *Type:* <a href="#@nikovirtala/projen-constructs.Environment">Environment</a>

---

##### `configureGlobals` <a name="configureGlobals" id="@nikovirtala/projen-constructs.Vitest.configureGlobals"></a>

```typescript
public configureGlobals(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.Vitest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@nikovirtala/projen-constructs.Vitest.isComponent">isComponent</a></code> | Test whether the given construct is a component. |
| <code><a href="#@nikovirtala/projen-constructs.Vitest.of">of</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@nikovirtala/projen-constructs.Vitest.isConstruct"></a>

```typescript
import { Vitest } from '@nikovirtala/projen-constructs'

Vitest.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-constructs.Vitest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@nikovirtala/projen-constructs.Vitest.isComponent"></a>

```typescript
import { Vitest } from '@nikovirtala/projen-constructs'

Vitest.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-constructs.Vitest.isComponent.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@nikovirtala/projen-constructs.Vitest.of"></a>

```typescript
import { Vitest } from '@nikovirtala/projen-constructs'

Vitest.of(project: NodeProject)
```

###### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-constructs.Vitest.of.parameter.project"></a>

- *Type:* projen.javascript.NodeProject

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.Vitest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@nikovirtala/projen-constructs.Vitest.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@nikovirtala/projen-constructs.Vitest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-constructs.Vitest.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---


## Structs <a name="Structs" id="Structs"></a>

### AwsCdkConstructLibraryProjectOptions <a name="AwsCdkConstructLibraryProjectOptions" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions"></a>

AwsCdkConstructLibraryProjectOptions.

#### Initializer <a name="Initializer" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.Initializer"></a>

```typescript
import { AwsCdkConstructLibraryProjectOptions } from '@nikovirtala/projen-constructs'

const awsCdkConstructLibraryProjectOptions: AwsCdkConstructLibraryProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.author">author</a></code> | <code>string</code> | The name of the library author. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.authorAddress">authorAddress</a></code> | <code>string</code> | Email or URL of the library author. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | Minimum version of the AWS CDK to depend on. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | Git repository URL. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.addPackageManagerToDevEngines">addPackageManagerToDevEngines</a></code> | <code>boolean</code> | Automatically add the resolved `packageManager` to `devEngines.packageManager` in `package.json`, setting `onFail` to `ignore`. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.allowScripts">allowScripts</a></code> | <code>string[]</code> | List of dependency (package) names that are allowed to run lifecycle install scripts (`preinstall`, `install`, `postinstall`, `prepare`) during dependency installation. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.auditDeps">auditDeps</a></code> | <code>boolean</code> | Run security audit on dependencies. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.auditDepsOptions">auditDepsOptions</a></code> | <code>projen.javascript.AuditOptions</code> | Security audit options. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configured). |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.biome">biome</a></code> | <code>boolean</code> | Setup Biome. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.biomeOptions">biomeOptions</a></code> | <code>projen.javascript.BiomeOptions</code> | Biome options. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.bumpPackage">bumpPackage</a></code> | <code>string</code> | The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.bunVersion">bunVersion</a></code> | <code>string</code> | The version of Bun to use if using Bun as a package manager. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.catalog">catalog</a></code> | <code>projen.cdk.Catalog</code> | Libraries will be picked up by the construct catalog when they are published to npm as jsii modules and will be published under:. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.cdkCliVersion">cdkCliVersion</a></code> | <code>string</code> | Version range of the AWS CDK CLI to depend on. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.cdkVersionPinning">cdkVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for CDK. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v5 By default, OIDC auth is used. Alternatively a token can be provided via `codeCovTokenSecret`. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.compat">compat</a></code> | <code>boolean</code> | Automatically run API compatibility test against the latest version published to npm after compilation. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.compatIgnore">compatIgnore</a></code> | <code>string</code> | Name of the ignore file for API compatibility tests. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.compressAssembly">compressAssembly</a></code> | <code>boolean</code> | Emit a compressed version of the assembly. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.constructsVersion">constructsVersion</a></code> | <code>string</code> | Minimum version of the `constructs` library to depend on. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.deleteOrphanedLockFiles">deleteOrphanedLockFiles</a></code> | <code>boolean</code> | Automatically delete lockfiles from package managers that are not the active one. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.devEngines">devEngines</a></code> | <code>projen.javascript.DevEngines</code> | Configure the `devEngines` field in `package.json`. The `devEngines.packageManager` field is automatically populated based on the resolved `packageManager` value. Any fields provided here are merged with the auto-populated `packageManager` entry. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a development tsconfig file. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.docgenFilePath">docgenFilePath</a></code> | <code>string</code> | File path for generated docs. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.edgeLambdaAutoDiscover">edgeLambdaAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `cloudfront.experimental.EdgeFunction` for each `.edge-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). Set to an empty string to not include `main` in your package.json. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.excludeTypescript">excludeTypescript</a></code> | <code>string[]</code> | Accepts a list of glob patterns. Files matching any of those patterns will be excluded from the TypeScript compiler input. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.experimentalIntegRunner">experimentalIntegRunner</a></code> | <code>boolean</code> | Enable experimental support for the AWS CDK integ-runner. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.homebrew">homebrew</a></code> | <code>boolean</code> | Enable Homebrew component. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.homebrewOptions">homebrewOptions</a></code> | <code><a href="#@nikovirtala/projen-constructs.HomebrewOptions">HomebrewOptions</a></code> | Homebrew configuration. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.integrationTestAutoDiscover">integrationTestAutoDiscover</a></code> | <code>boolean</code> | Automatically discovers and creates integration tests for each `.integ.ts` file under your test directory. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.jsiiVersion">jsiiVersion</a></code> | <code>string</code> | Version of the jsii compiler to use. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.lambdaAutoDiscover">lambdaAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `aws_lambda.Function` for each `.lambda.ts` handler in your source tree. If this is disabled, you either need to explicitly call `aws_lambda.Function.autoDiscover()` or define a `new aws_lambda.Function()` for each handler. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.lambdaExtensionAutoDiscover">lambdaExtensionAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts` entrypoint in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.lambdaOptions">lambdaOptions</a></code> | <code>projen.awscdk.LambdaFunctionCommonOptions</code> | Common options for all AWS Lambda functions. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | The maximum node version supported by this package. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.mise">mise</a></code> | <code>boolean</code> | Enable Mise component. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.miseOptions">miseOptions</a></code> | <code><a href="#@nikovirtala/projen-constructs.MiseOptions">MiseOptions</a></code> | Mise configuration. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.nextVersionCommand">nextVersionCommand</a></code> | <code>string</code> | A shell command to control the next version to release. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.npmTrustedPublishing">npmTrustedPublishing</a></code> | <code>boolean</code> | Use trusted publishing for publishing to npmjs.com Needs to be pre-configured on npm.js to work. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. Relative to this directory, all files are synthesized. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.pnpmOptions">pnpmOptions</a></code> | <code>projen.javascript.PnpmOptions</code> | Options for pnpm. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.projectTree">projectTree</a></code> | <code>boolean</code> | Generate a project tree file (`.projen/tree.json`) that shows all components and their relationships. Useful for understanding your project structure and debugging. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.publishToGo">publishToGo</a></code> | <code>projen.cdk.JsiiGoTarget</code> | Publish Go bindings to a git repository. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.publishToMaven">publishToMaven</a></code> | <code>projen.cdk.JsiiJavaTarget</code> | Publish to maven. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.publishToNuget">publishToNuget</a></code> | <code>projen.cdk.JsiiDotNetTarget</code> | Publish to NuGet. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.publishToPypi">publishToPypi</a></code> | <code>projen.cdk.JsiiPythonTarget</code> | Publish to pypi. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.releaseEnvironment">releaseEnvironment</a></code> | <code>string</code> | The GitHub Actions environment used for the release. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.releaseWorkflowEnv">releaseWorkflowEnv</a></code> | <code>{[ key: string ]: string}</code> | Build environment variables for release workflows. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.rootdir">rootdir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.runner">runner</a></code> | <code>projen.typescript.TypeScriptRunner</code> | The TypeScript runner to use for executing TypeScript files. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.singletonLambdaAutoDiscover">singletonLambdaAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `awscdk.SingletonFunction` for each `.singleton-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom TSConfig. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name (and path) of the development tsconfig file. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.validateTsconfig">validateTsconfig</a></code> | <code>projen.cdk.ValidateTsconfig</code> | Level of tsconfig validation jsii should perform on the user-provided tsconfig. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with commit-and-tag-version package. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.vitest">vitest</a></code> | <code>boolean</code> | Enable Vitest component. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.vitestOptions">vitestOptions</a></code> | <code><a href="#@nikovirtala/projen-constructs.VitestOptions">VitestOptions</a></code> | Vitest configuration. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version used in GitHub Actions workflows. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |

---

##### `author`<sup>Required</sup> <a name="author" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.author"></a>

```typescript
public readonly author: string;
```

- *Type:* string
- *Default:* $GIT_USER_NAME

The name of the library author.

---

##### `authorAddress`<sup>Required</sup> <a name="authorAddress" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.authorAddress"></a>

```typescript
public readonly authorAddress: string;
```

- *Type:* string
- *Default:* $GIT_USER_EMAIL

Email or URL of the library author.

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string
- *Default:* "2.189.1"

Minimum version of the AWS CDK to depend on.

---

##### `name`<sup>Required</sup> <a name="name" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string
- *Default:* $GIT_REMOTE

Git repository URL.

---

##### `addPackageManagerToDevEngines`<sup>Optional</sup> <a name="addPackageManagerToDevEngines" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.addPackageManagerToDevEngines"></a>

```typescript
public readonly addPackageManagerToDevEngines: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add the resolved `packageManager` to `devEngines.packageManager` in `package.json`, setting `onFail` to `ignore`.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `allowScripts`<sup>Optional</sup> <a name="allowScripts" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.allowScripts"></a>

```typescript
public readonly allowScripts: string[];
```

- *Type:* string[]
- *Default:* all install scripts are allowed to run (package manager default)

List of dependency (package) names that are allowed to run lifecycle install scripts (`preinstall`, `install`, `postinstall`, `prepare`) during dependency installation.

These scripts can execute arbitrary code, making them a common
supply-chain attack vector. Package managers are moving toward
blocking them by default and requiring an explicit allowlist.
Configuring `allowScripts` sets up that allowlist so scripts only run
for the packages you have explicitly reviewed and trust.

Support for this setting depends on the configured `packageManager`:

- `NPM`: written to the native `allowScripts` field in `package.json`
  (requires npm >= 11.16; see https://docs.npmjs.com/cli/v11/commands/npm-approve-scripts).
- `BUN`: written to the native `trustedDependencies` field in
  `package.json` (see https://bun.com/docs/pm/lifecycle).
- `PNPM`: written to the `onlyBuiltDependencies` setting in
  `pnpm-workspace.yaml` (see https://pnpm.io/settings#onlybuiltdependencies).
- `YARN2`, `YARN_BERRY`: written to the native
  `dependenciesMeta.<pkg>.built` allowlist in `package.json`, combined
  with `enableScripts: false` in `.yarnrc.yml` (see
  https://yarnpkg.com/features/security#postinstalls). If you set
  `yarnBerryOptions.yarnRcOptions.enableScripts` explicitly, that value
  is respected instead of being overridden.
- `YARN`, `YARN_CLASSIC`: not supported. Yarn Classic has no native
  mechanism to allowlist install scripts for specific dependencies.
  Setting this option with one of these package managers throws an
  error at synthesis time.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `auditDeps`<sup>Optional</sup> <a name="auditDeps" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.auditDeps"></a>

```typescript
public readonly auditDeps: boolean;
```

- *Type:* boolean
- *Default:* false

Run security audit on dependencies.

When enabled, creates an "audit" task that checks for known security vulnerabilities
in dependencies. By default, runs during every build and checks for "high" severity
vulnerabilities or above in all dependencies (including dev dependencies).

---

##### `auditDepsOptions`<sup>Optional</sup> <a name="auditDepsOptions" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.auditDepsOptions"></a>

```typescript
public readonly auditDepsOptions: AuditOptions;
```

- *Type:* projen.javascript.AuditOptions
- *Default:* default options

Security audit options.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configured).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `biome`<sup>Optional</sup> <a name="biome" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.biome"></a>

```typescript
public readonly biome: boolean;
```

- *Type:* boolean
- *Default:* false

Setup Biome.

---

##### `biomeOptions`<sup>Optional</sup> <a name="biomeOptions" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.biomeOptions"></a>

```typescript
public readonly biomeOptions: BiomeOptions;
```

- *Type:* projen.javascript.BiomeOptions
- *Default:* default options

Biome options.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### `bumpPackage`<sup>Optional</sup> <a name="bumpPackage" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.bumpPackage"></a>

```typescript
public readonly bumpPackage: string;
```

- *Type:* string
- *Default:* A recent version of "commit-and-tag-version"

The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string.

This can be any compatible package version, including the deprecated `standard-version@9`.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `pnpm add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `pnpm add` or `npm i` (e.g. `express@^2`) and
this will be what your `package.json` will eventually include.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `bunVersion`<sup>Optional</sup> <a name="bunVersion" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.bunVersion"></a>

```typescript
public readonly bunVersion: string;
```

- *Type:* string
- *Default:* "latest"

The version of Bun to use if using Bun as a package manager.

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.catalog"></a>

```typescript
public readonly catalog: Catalog;
```

- *Type:* projen.cdk.Catalog
- *Default:* new version will be announced

Libraries will be picked up by the construct catalog when they are published to npm as jsii modules and will be published under:.

https://awscdk.io/packages/[@SCOPE/]PACKAGE@VERSION

The catalog will also post a tweet to https://twitter.com/awscdkio with the
package name, description and the above link. You can disable these tweets
through `{ announce: false }`.

You can also add a Twitter handle through `{ twitter: 'xx' }` which will be
mentioned in the tweet.

---

##### `cdkCliVersion`<sup>Optional</sup> <a name="cdkCliVersion" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.cdkCliVersion"></a>

```typescript
public readonly cdkCliVersion: string;
```

- *Type:* string
- *Default:* "^2"

Version range of the AWS CDK CLI to depend on.

Can be either a specific version, or an NPM version range.

By default, the latest 2.x version will be installed; you can use this
option to restrict it to a specific version or version range.

---

##### `cdkVersionPinning`<sup>Optional</sup> <a name="cdkVersionPinning" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.cdkVersionPinning"></a>

```typescript
public readonly cdkVersionPinning: boolean;
```

- *Type:* boolean

Use pinned version instead of caret version for CDK.

You can use this to prevent mixed versions for your CDK dependencies and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v5 By default, OIDC auth is used. Alternatively a token can be provided via `codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* OIDC auth is used

Define the secret name for a specified https://codecov.io/ token.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `compat`<sup>Optional</sup> <a name="compat" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.compat"></a>

```typescript
public readonly compat: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically run API compatibility test against the latest version published to npm after compilation.

You can manually run compatibility tests using `yarn compat` if this feature is disabled.
- You can ignore compatibility failures by adding lines to a ".compatignore" file.

---

##### `compatIgnore`<sup>Optional</sup> <a name="compatIgnore" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.compatIgnore"></a>

```typescript
public readonly compatIgnore: string;
```

- *Type:* string
- *Default:* ".compatignore"

Name of the ignore file for API compatibility tests.

---

##### `compressAssembly`<sup>Optional</sup> <a name="compressAssembly" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.compressAssembly"></a>

```typescript
public readonly compressAssembly: boolean;
```

- *Type:* boolean
- *Default:* false

Emit a compressed version of the assembly.

---

##### `constructsVersion`<sup>Optional</sup> <a name="constructsVersion" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.constructsVersion"></a>

```typescript
public readonly constructsVersion: string;
```

- *Type:* string
- *Default:* for CDK 1.x the default is "3.2.27", for CDK 2.x the default is "10.5.1".

Minimum version of the `constructs` library to depend on.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

This value is only used if the selected license text contains the
`$copyright_owner` placeholder. For example, it has no effect on the
MPL-2.0 license text.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

This value is only used if the selected license text contains the
`$copyright_period` placeholder. For example, it has no effect on the
MPL-2.0 license text.

---

##### `defaultReleaseBranch`<sup>Optional</sup> <a name="defaultReleaseBranch" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `deleteOrphanedLockFiles`<sup>Optional</sup> <a name="deleteOrphanedLockFiles" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.deleteOrphanedLockFiles"></a>

```typescript
public readonly deleteOrphanedLockFiles: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically delete lockfiles from package managers that are not the active one.

Only triggered when the lockfile for the configured package
manager already exists.

This is useful when migrating between package managers to avoid conflicts.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `pnpm add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `pnpm add` or `npm i` (e.g. `express@^2`) and
this will be what your `package.json` will eventually include.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* `true` for root projects, `false` for subprojects

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `description`<sup>Optional</sup> <a name="description" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `pnpm add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `pnpm add` or `npm i` (e.g. `express@^2`) and
this will be what your `package.json` will eventually include.

---

##### `devEngines`<sup>Optional</sup> <a name="devEngines" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.devEngines"></a>

```typescript
public readonly devEngines: DevEngines;
```

- *Type:* projen.javascript.DevEngines

Configure the `devEngines` field in `package.json`. The `devEngines.packageManager` field is automatically populated based on the resolved `packageManager` value. Any fields provided here are merged with the auto-populated `packageManager` entry.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a development tsconfig file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docgenFilePath`<sup>Optional</sup> <a name="docgenFilePath" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.docgenFilePath"></a>

```typescript
public readonly docgenFilePath: string;
```

- *Type:* string
- *Default:* "API.md"

File path for generated docs.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `edgeLambdaAutoDiscover`<sup>Optional</sup> <a name="edgeLambdaAutoDiscover" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.edgeLambdaAutoDiscover"></a>

```typescript
public readonly edgeLambdaAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `cloudfront.experimental.EdgeFunction` for each `.edge-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`). Set to an empty string to not include `main` in your package.json.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `excludeTypescript`<sup>Optional</sup> <a name="excludeTypescript" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.excludeTypescript"></a>

```typescript
public readonly excludeTypescript: string[];
```

- *Type:* string[]

Accepts a list of glob patterns. Files matching any of those patterns will be excluded from the TypeScript compiler input.

By default, jsii will include all *.ts files (except .d.ts files) in the TypeScript compiler input.
This can be problematic for example when the package's build or test procedure generates .ts files
that cannot be compiled with jsii's compiler settings.

---

##### `experimentalIntegRunner`<sup>Optional</sup> <a name="experimentalIntegRunner" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.experimentalIntegRunner"></a>

```typescript
public readonly experimentalIntegRunner: boolean;
```

- *Type:* boolean
- *Default:* false

Enable experimental support for the AWS CDK integ-runner.

---

##### `github`<sup>Optional</sup> <a name="github" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### `homebrew`<sup>Optional</sup> <a name="homebrew" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.homebrew"></a>

```typescript
public readonly homebrew: boolean;
```

- *Type:* boolean
- *Default:* true

Enable Homebrew component.

---

##### `homebrewOptions`<sup>Optional</sup> <a name="homebrewOptions" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.homebrewOptions"></a>

```typescript
public readonly homebrewOptions: HomebrewOptions;
```

- *Type:* <a href="#@nikovirtala/projen-constructs.HomebrewOptions">HomebrewOptions</a>
- *Default:* default Homebrew configuration

Homebrew configuration.

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `integrationTestAutoDiscover`<sup>Optional</sup> <a name="integrationTestAutoDiscover" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.integrationTestAutoDiscover"></a>

```typescript
public readonly integrationTestAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically discovers and creates integration tests for each `.integ.ts` file under your test directory.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `jsiiVersion`<sup>Optional</sup> <a name="jsiiVersion" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.jsiiVersion"></a>

```typescript
public readonly jsiiVersion: string;
```

- *Type:* string
- *Default:* "~5.9.0"

Version of the jsii compiler to use.

Set to "*" if you want to manually manage the version of jsii in your
project by managing updates to `package.json` on your own.

NOTE: The jsii compiler releases since 5.0.0 are not semantically versioned
and should remain on the same minor, so we recommend using a `~` dependency
(e.g. `~5.0.0`).

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `lambdaAutoDiscover`<sup>Optional</sup> <a name="lambdaAutoDiscover" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.lambdaAutoDiscover"></a>

```typescript
public readonly lambdaAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `aws_lambda.Function` for each `.lambda.ts` handler in your source tree. If this is disabled, you either need to explicitly call `aws_lambda.Function.autoDiscover()` or define a `new aws_lambda.Function()` for each handler.

---

##### `lambdaExtensionAutoDiscover`<sup>Optional</sup> <a name="lambdaExtensionAutoDiscover" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.lambdaExtensionAutoDiscover"></a>

```typescript
public readonly lambdaExtensionAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts` entrypoint in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `lambdaOptions`<sup>Optional</sup> <a name="lambdaOptions" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.lambdaOptions"></a>

```typescript
public readonly lambdaOptions: LambdaFunctionCommonOptions;
```

- *Type:* projen.awscdk.LambdaFunctionCommonOptions
- *Default:* default options

Common options for all AWS Lambda functions.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `license`<sup>Optional</sup> <a name="license" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no maximum version is enforced

The maximum node version supported by this package.

Most projects should not use this option.
The value indicates that the package is incompatible with any newer versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option.
Consider this option only if your package is known to not function with newer versions of node.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no minimum version is enforced

The minimum node version required by this package to function.

Most projects should not use this option.
The value indicates that the package is incompatible with any older versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option, even if your package is incompatible with EOL versions of node.
Consider this option only if your package depends on a specific feature, that is not available in other LTS versions.
Setting this option has very high impact on the consumers of your package,
as package managers will actively prevent usage with node versions you have marked as incompatible.

To change the node version of your CI/CD workflows, use `workflowNodeVersion`.

---

##### `mise`<sup>Optional</sup> <a name="mise" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.mise"></a>

```typescript
public readonly mise: boolean;
```

- *Type:* boolean
- *Default:* true

Enable Mise component.

---

##### `miseOptions`<sup>Optional</sup> <a name="miseOptions" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.miseOptions"></a>

```typescript
public readonly miseOptions: MiseOptions;
```

- *Type:* <a href="#@nikovirtala/projen-constructs.MiseOptions">MiseOptions</a>
- *Default:* default Mise configuration

Mise configuration.

---

##### `nextVersionCommand`<sup>Optional</sup> <a name="nextVersionCommand" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.nextVersionCommand"></a>

```typescript
public readonly nextVersionCommand: string;
```

- *Type:* string
- *Default:* The next version will be determined based on the commit history and project settings.

A shell command to control the next version to release.

If present, this shell command will be run before the bump is executed, and
it determines what version to release. It will be executed in the following
environment:

- Working directory: the project directory.
- `$VERSION`: the current version. Looks like `1.2.3`.
- `$LATEST_TAG`: the most recent tag. Looks like `prefix-v1.2.3`, or may be unset.
- `$SUGGESTED_BUMP`: the suggested bump action based on commits. One of `major|minor|patch|none`.

The command should print one of the following to `stdout`:

- Nothing: the next version number will be determined based on commit history.
- `x.y.z`: the next version number will be `x.y.z`.
- `major|minor|patch`: the next version number will be the current version number
  with the indicated component bumped.

This setting cannot be specified together with `minMajorVersion`; the invoked
script can be used to achieve the effects of `minMajorVersion`.

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.npmProvenance"></a>

```typescript
public readonly npmProvenance: boolean;
```

- *Type:* boolean
- *Default:* true for public packages, false otherwise

Should provenance statements be generated when the package is published.

A supported package manager is required to publish a package with npm provenance statements and
you will need to use a supported CI/CD provider.

Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
which is using npm internally and supports provenance statements independently of the package manager used.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `npmTrustedPublishing`<sup>Optional</sup> <a name="npmTrustedPublishing" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.npmTrustedPublishing"></a>

```typescript
public readonly npmTrustedPublishing: boolean;
```

- *Type:* boolean
- *Default:* false

Use trusted publishing for publishing to npmjs.com Needs to be pre-configured on npm.js to work.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project. Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `package`<sup>Optional</sup> <a name="package" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* Detected from the calling process or `YARN_CLASSIC` if detection fails.

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `pnpmOptions`<sup>Optional</sup> <a name="pnpmOptions" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.pnpmOptions"></a>

```typescript
public readonly pnpmOptions: PnpmOptions;
```

- *Type:* projen.javascript.PnpmOptions
- *Default:* all default options

Options for pnpm.

---

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "10.33.0"

The version of PNPM to use if using PNPM as a package manager.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `projectTree`<sup>Optional</sup> <a name="projectTree" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.projectTree"></a>

```typescript
public readonly projectTree: boolean;
```

- *Type:* boolean
- *Default:* false

Generate a project tree file (`.projen/tree.json`) that shows all components and their relationships. Useful for understanding your project structure and debugging.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `publishToGo`<sup>Optional</sup> <a name="publishToGo" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.publishToGo"></a>

```typescript
public readonly publishToGo: JsiiGoTarget;
```

- *Type:* projen.cdk.JsiiGoTarget
- *Default:* no publishing

Publish Go bindings to a git repository.

---

##### `publishToMaven`<sup>Optional</sup> <a name="publishToMaven" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.publishToMaven"></a>

```typescript
public readonly publishToMaven: JsiiJavaTarget;
```

- *Type:* projen.cdk.JsiiJavaTarget
- *Default:* no publishing

Publish to maven.

---

##### `publishToNuget`<sup>Optional</sup> <a name="publishToNuget" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.publishToNuget"></a>

```typescript
public readonly publishToNuget: JsiiDotNetTarget;
```

- *Type:* projen.cdk.JsiiDotNetTarget
- *Default:* no publishing

Publish to NuGet.

---

##### `publishToPypi`<sup>Optional</sup> <a name="publishToPypi" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.publishToPypi"></a>

```typescript
public readonly publishToPypi: JsiiPythonTarget;
```

- *Type:* projen.cdk.JsiiPythonTarget
- *Default:* no publishing

Publish to pypi.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `release`<sup>Optional</sup> <a name="release" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: projen.release.BranchOptions}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### `releaseEnvironment`<sup>Optional</sup> <a name="releaseEnvironment" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.releaseEnvironment"></a>

```typescript
public readonly releaseEnvironment: string;
```

- *Type:* string
- *Default:* no environment used, unless set at the artifact level

The GitHub Actions environment used for the release.

This can be used to add an explicit approval step to the release
or limit who can initiate a release through environment protection rules.

When multiple artifacts are released, the environment can be overwritten
on a per artifact basis.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* string
- *Default:* "v"

Automatically add the given prefix to release tags.

Useful if you are releasing on multiple branches with overlapping version numbers.
Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowEnv`<sup>Optional</sup> <a name="releaseWorkflowEnv" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.releaseWorkflowEnv"></a>

```typescript
public readonly releaseWorkflowEnv: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Build environment variables for release workflows.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `rootdir`<sup>Optional</sup> <a name="rootdir" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.rootdir"></a>

```typescript
public readonly rootdir: string;
```

- *Type:* string
- *Default:* "."

---

##### `runner`<sup>Optional</sup> <a name="runner" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.runner"></a>

```typescript
public readonly runner: TypeScriptRunner;
```

- *Type:* projen.typescript.TypeScriptRunner
- *Default:* TypeScriptRunner.tsNode()

The TypeScript runner to use for executing TypeScript files.

This is a project-level setting that components (e.g. projenrc) will
use as their default runner.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### `singletonLambdaAutoDiscover`<sup>Optional</sup> <a name="singletonLambdaAutoDiscover" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.singletonLambdaAutoDiscover"></a>

```typescript
public readonly singletonLambdaAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `awscdk.SingletonFunction` for each `.singleton-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `stale`<sup>Optional</sup> <a name="stale" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string
- *Default:* "test"

Jest tests directory.

Tests files should be named `xxx.test.ts`.
If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "{testdir}/tsconfig.json"

The name (and path) of the development tsconfig file.

By default this lives inside the test directory (e.g. `test/tsconfig.json`)
so that the TypeScript language service resolves it as the nearest config
for test files.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `validateTsconfig`<sup>Optional</sup> <a name="validateTsconfig" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.validateTsconfig"></a>

```typescript
public readonly validateTsconfig: ValidateTsconfig;
```

- *Type:* projen.cdk.ValidateTsconfig
- *Default:* ValidateTsconfig.STRICT

Level of tsconfig validation jsii should perform on the user-provided tsconfig.

Only relevant when the project synthesizes its own tsconfig
(i.e. `disableTsconfig` is not set on the TypeScriptProject).

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with commit-and-tag-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `vitest`<sup>Optional</sup> <a name="vitest" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.vitest"></a>

```typescript
public readonly vitest: boolean;
```

- *Type:* boolean
- *Default:* true

Enable Vitest component.

---

##### `vitestOptions`<sup>Optional</sup> <a name="vitestOptions" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.vitestOptions"></a>

```typescript
public readonly vitestOptions: VitestOptions;
```

- *Type:* <a href="#@nikovirtala/projen-constructs.VitestOptions">VitestOptions</a>
- *Default:* default Vitest configuration

Vitest configuration.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* default GitHub Actions user

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* `minNodeVersion` if set, otherwise `lts/*`.

The node version used in GitHub Actions workflows.

Always use this option if your GitHub Actions workflows require a specific to run.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="@nikovirtala/projen-constructs.AwsCdkConstructLibraryProjectOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

### AwsCdkTypeScriptAppProjectOptions <a name="AwsCdkTypeScriptAppProjectOptions" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions"></a>

AwsCdkTypeScriptAppProjectOptions.

#### Initializer <a name="Initializer" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.Initializer"></a>

```typescript
import { AwsCdkTypeScriptAppProjectOptions } from '@nikovirtala/projen-constructs'

const awsCdkTypeScriptAppProjectOptions: AwsCdkTypeScriptAppProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | Minimum version of the AWS CDK to depend on. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.addPackageManagerToDevEngines">addPackageManagerToDevEngines</a></code> | <code>boolean</code> | Automatically add the resolved `packageManager` to `devEngines.packageManager` in `package.json`, setting `onFail` to `ignore`. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.allowScripts">allowScripts</a></code> | <code>string[]</code> | List of dependency (package) names that are allowed to run lifecycle install scripts (`preinstall`, `install`, `postinstall`, `prepare`) during dependency installation. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.app">app</a></code> | <code>string</code> | The command line to execute in order to synthesize the CDK application (language specific). |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.appEntrypoint">appEntrypoint</a></code> | <code>string</code> | The CDK app's entrypoint (relative to the source directory, which is "src" by default). |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.auditDeps">auditDeps</a></code> | <code>boolean</code> | Run security audit on dependencies. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.auditDepsOptions">auditDepsOptions</a></code> | <code>projen.javascript.AuditOptions</code> | Security audit options. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configured). |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.biome">biome</a></code> | <code>boolean</code> | Setup Biome. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.biomeOptions">biomeOptions</a></code> | <code>projen.javascript.BiomeOptions</code> | Biome options. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.buildCommand">buildCommand</a></code> | <code>string</code> | A command to execute before synthesis. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.bumpPackage">bumpPackage</a></code> | <code>string</code> | The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.bunVersion">bunVersion</a></code> | <code>string</code> | The version of Bun to use if using Bun as a package manager. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.cdkCliVersion">cdkCliVersion</a></code> | <code>string</code> | Version range of the AWS CDK CLI to depend on. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.cdkout">cdkout</a></code> | <code>string</code> | cdk.out directory. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.cdkVersionPinning">cdkVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for CDK. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v5 By default, OIDC auth is used. Alternatively a token can be provided via `codeCovTokenSecret`. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.constructsVersion">constructsVersion</a></code> | <code>string</code> | Minimum version of the `constructs` library to depend on. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.context">context</a></code> | <code>{[ key: string ]: any}</code> | Additional context to include in `cdk.json`. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.deleteOrphanedLockFiles">deleteOrphanedLockFiles</a></code> | <code>boolean</code> | Automatically delete lockfiles from package managers that are not the active one. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.devEngines">devEngines</a></code> | <code>projen.javascript.DevEngines</code> | Configure the `devEngines` field in `package.json`. The `devEngines.packageManager` field is automatically populated based on the resolved `packageManager` value. Any fields provided here are merged with the auto-populated `packageManager` entry. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a development tsconfig file. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.edgeLambdaAutoDiscover">edgeLambdaAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `cloudfront.experimental.EdgeFunction` for each `.edge-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). Set to an empty string to not include `main` in your package.json. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.experimentalIntegRunner">experimentalIntegRunner</a></code> | <code>boolean</code> | Enable experimental support for the AWS CDK integ-runner. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.featureFlags">featureFlags</a></code> | <code>projen.awscdk.ICdkFeatureFlags</code> | Feature flags that should be enabled in `cdk.json`. Make sure to double-check any changes to feature flags in `cdk.json` before deploying. Unexpected changes may cause breaking changes in your CDK app. You can overwrite any feature flag by passing it into the context field. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.homebrew">homebrew</a></code> | <code>boolean</code> | Enable Homebrew component. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.homebrewOptions">homebrewOptions</a></code> | <code><a href="#@nikovirtala/projen-constructs.HomebrewOptions">HomebrewOptions</a></code> | Homebrew configuration. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.integrationTestAutoDiscover">integrationTestAutoDiscover</a></code> | <code>boolean</code> | Automatically discovers and creates integration tests for each `.integ.ts` file in under your test directory. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.lambdaAutoDiscover">lambdaAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `awscdk.LambdaFunction` for each `.lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.lambdaExtensionAutoDiscover">lambdaExtensionAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts` entrypoint in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.lambdaOptions">lambdaOptions</a></code> | <code>projen.awscdk.LambdaFunctionCommonOptions</code> | Common options for all AWS Lambda functions. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | The maximum node version supported by this package. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.mise">mise</a></code> | <code>boolean</code> | Enable Mise component. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.miseOptions">miseOptions</a></code> | <code><a href="#@nikovirtala/projen-constructs.MiseOptions">MiseOptions</a></code> | Mise configuration. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.nextVersionCommand">nextVersionCommand</a></code> | <code>string</code> | A shell command to control the next version to release. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.npmTrustedPublishing">npmTrustedPublishing</a></code> | <code>boolean</code> | Use trusted publishing for publishing to npmjs.com Needs to be pre-configured on npm.js to work. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. Relative to this directory, all files are synthesized. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.pnpmOptions">pnpmOptions</a></code> | <code>projen.javascript.PnpmOptions</code> | Options for pnpm. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.projectTree">projectTree</a></code> | <code>boolean</code> | Generate a project tree file (`.projen/tree.json`) that shows all components and their relationships. Useful for understanding your project structure and debugging. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.releaseEnvironment">releaseEnvironment</a></code> | <code>string</code> | The GitHub Actions environment used for the release. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.releaseWorkflowEnv">releaseWorkflowEnv</a></code> | <code>{[ key: string ]: string}</code> | Build environment variables for release workflows. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.requireApproval">requireApproval</a></code> | <code>projen.awscdk.ApprovalLevel</code> | To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.runner">runner</a></code> | <code>projen.typescript.TypeScriptRunner</code> | The TypeScript runner to use for executing TypeScript files. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.singletonLambdaAutoDiscover">singletonLambdaAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `awscdk.SingletonFunction` for each `.singleton-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom TSConfig. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name (and path) of the development tsconfig file. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with commit-and-tag-version package. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.vitest">vitest</a></code> | <code>boolean</code> | Enable Vitest component. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.vitestOptions">vitestOptions</a></code> | <code><a href="#@nikovirtala/projen-constructs.VitestOptions">VitestOptions</a></code> | Vitest configuration. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.watchExcludes">watchExcludes</a></code> | <code>string[]</code> | Glob patterns to exclude from `cdk watch`. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.watchIncludes">watchIncludes</a></code> | <code>string[]</code> | Glob patterns to include in `cdk watch`. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version used in GitHub Actions workflows. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string
- *Default:* "2.189.1"

Minimum version of the AWS CDK to depend on.

---

##### `name`<sup>Required</sup> <a name="name" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `addPackageManagerToDevEngines`<sup>Optional</sup> <a name="addPackageManagerToDevEngines" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.addPackageManagerToDevEngines"></a>

```typescript
public readonly addPackageManagerToDevEngines: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add the resolved `packageManager` to `devEngines.packageManager` in `package.json`, setting `onFail` to `ignore`.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `allowScripts`<sup>Optional</sup> <a name="allowScripts" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.allowScripts"></a>

```typescript
public readonly allowScripts: string[];
```

- *Type:* string[]
- *Default:* all install scripts are allowed to run (package manager default)

List of dependency (package) names that are allowed to run lifecycle install scripts (`preinstall`, `install`, `postinstall`, `prepare`) during dependency installation.

These scripts can execute arbitrary code, making them a common
supply-chain attack vector. Package managers are moving toward
blocking them by default and requiring an explicit allowlist.
Configuring `allowScripts` sets up that allowlist so scripts only run
for the packages you have explicitly reviewed and trust.

Support for this setting depends on the configured `packageManager`:

- `NPM`: written to the native `allowScripts` field in `package.json`
  (requires npm >= 11.16; see https://docs.npmjs.com/cli/v11/commands/npm-approve-scripts).
- `BUN`: written to the native `trustedDependencies` field in
  `package.json` (see https://bun.com/docs/pm/lifecycle).
- `PNPM`: written to the `onlyBuiltDependencies` setting in
  `pnpm-workspace.yaml` (see https://pnpm.io/settings#onlybuiltdependencies).
- `YARN2`, `YARN_BERRY`: written to the native
  `dependenciesMeta.<pkg>.built` allowlist in `package.json`, combined
  with `enableScripts: false` in `.yarnrc.yml` (see
  https://yarnpkg.com/features/security#postinstalls). If you set
  `yarnBerryOptions.yarnRcOptions.enableScripts` explicitly, that value
  is respected instead of being overridden.
- `YARN`, `YARN_CLASSIC`: not supported. Yarn Classic has no native
  mechanism to allowlist install scripts for specific dependencies.
  Setting this option with one of these package managers throws an
  error at synthesis time.

---

##### `app`<sup>Optional</sup> <a name="app" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.app"></a>

```typescript
public readonly app: string;
```

- *Type:* string

The command line to execute in order to synthesize the CDK application (language specific).

---

##### `appEntrypoint`<sup>Optional</sup> <a name="appEntrypoint" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.appEntrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* string
- *Default:* "main.ts"

The CDK app's entrypoint (relative to the source directory, which is "src" by default).

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `auditDeps`<sup>Optional</sup> <a name="auditDeps" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.auditDeps"></a>

```typescript
public readonly auditDeps: boolean;
```

- *Type:* boolean
- *Default:* false

Run security audit on dependencies.

When enabled, creates an "audit" task that checks for known security vulnerabilities
in dependencies. By default, runs during every build and checks for "high" severity
vulnerabilities or above in all dependencies (including dev dependencies).

---

##### `auditDepsOptions`<sup>Optional</sup> <a name="auditDepsOptions" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.auditDepsOptions"></a>

```typescript
public readonly auditDepsOptions: AuditOptions;
```

- *Type:* projen.javascript.AuditOptions
- *Default:* default options

Security audit options.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configured).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `biome`<sup>Optional</sup> <a name="biome" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.biome"></a>

```typescript
public readonly biome: boolean;
```

- *Type:* boolean
- *Default:* false

Setup Biome.

---

##### `biomeOptions`<sup>Optional</sup> <a name="biomeOptions" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.biomeOptions"></a>

```typescript
public readonly biomeOptions: BiomeOptions;
```

- *Type:* projen.javascript.BiomeOptions
- *Default:* default options

Biome options.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `buildCommand`<sup>Optional</sup> <a name="buildCommand" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.buildCommand"></a>

```typescript
public readonly buildCommand: string;
```

- *Type:* string
- *Default:* no build command

A command to execute before synthesis.

This command will be called when
running `cdk synth` or when `cdk watch` identifies a change in your source
code before redeployment.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### `bumpPackage`<sup>Optional</sup> <a name="bumpPackage" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.bumpPackage"></a>

```typescript
public readonly bumpPackage: string;
```

- *Type:* string
- *Default:* A recent version of "commit-and-tag-version"

The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string.

This can be any compatible package version, including the deprecated `standard-version@9`.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `pnpm add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `pnpm add` or `npm i` (e.g. `express@^2`) and
this will be what your `package.json` will eventually include.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `bunVersion`<sup>Optional</sup> <a name="bunVersion" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.bunVersion"></a>

```typescript
public readonly bunVersion: string;
```

- *Type:* string
- *Default:* "latest"

The version of Bun to use if using Bun as a package manager.

---

##### `cdkCliVersion`<sup>Optional</sup> <a name="cdkCliVersion" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.cdkCliVersion"></a>

```typescript
public readonly cdkCliVersion: string;
```

- *Type:* string
- *Default:* "^2"

Version range of the AWS CDK CLI to depend on.

Can be either a specific version, or an NPM version range.

By default, the latest 2.x version will be installed; you can use this
option to restrict it to a specific version or version range.

---

##### `cdkout`<sup>Optional</sup> <a name="cdkout" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.cdkout"></a>

```typescript
public readonly cdkout: string;
```

- *Type:* string
- *Default:* "cdk.out"

cdk.out directory.

---

##### `cdkVersionPinning`<sup>Optional</sup> <a name="cdkVersionPinning" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.cdkVersionPinning"></a>

```typescript
public readonly cdkVersionPinning: boolean;
```

- *Type:* boolean

Use pinned version instead of caret version for CDK.

You can use this to prevent mixed versions for your CDK dependencies and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v5 By default, OIDC auth is used. Alternatively a token can be provided via `codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* OIDC auth is used

Define the secret name for a specified https://codecov.io/ token.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `constructsVersion`<sup>Optional</sup> <a name="constructsVersion" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.constructsVersion"></a>

```typescript
public readonly constructsVersion: string;
```

- *Type:* string
- *Default:* for CDK 1.x the default is "3.2.27", for CDK 2.x the default is "10.5.1".

Minimum version of the `constructs` library to depend on.

---

##### `context`<sup>Optional</sup> <a name="context" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.context"></a>

```typescript
public readonly context: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* no additional context

Additional context to include in `cdk.json`.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

This value is only used if the selected license text contains the
`$copyright_owner` placeholder. For example, it has no effect on the
MPL-2.0 license text.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

This value is only used if the selected license text contains the
`$copyright_period` placeholder. For example, it has no effect on the
MPL-2.0 license text.

---

##### `defaultReleaseBranch`<sup>Optional</sup> <a name="defaultReleaseBranch" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `deleteOrphanedLockFiles`<sup>Optional</sup> <a name="deleteOrphanedLockFiles" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.deleteOrphanedLockFiles"></a>

```typescript
public readonly deleteOrphanedLockFiles: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically delete lockfiles from package managers that are not the active one.

Only triggered when the lockfile for the configured package
manager already exists.

This is useful when migrating between package managers to avoid conflicts.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `pnpm add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `pnpm add` or `npm i` (e.g. `express@^2`) and
this will be what your `package.json` will eventually include.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* `true` for root projects, `false` for subprojects

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `description`<sup>Optional</sup> <a name="description" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `pnpm add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `pnpm add` or `npm i` (e.g. `express@^2`) and
this will be what your `package.json` will eventually include.

---

##### `devEngines`<sup>Optional</sup> <a name="devEngines" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.devEngines"></a>

```typescript
public readonly devEngines: DevEngines;
```

- *Type:* projen.javascript.DevEngines

Configure the `devEngines` field in `package.json`. The `devEngines.packageManager` field is automatically populated based on the resolved `packageManager` value. Any fields provided here are merged with the auto-populated `packageManager` entry.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a development tsconfig file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `edgeLambdaAutoDiscover`<sup>Optional</sup> <a name="edgeLambdaAutoDiscover" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.edgeLambdaAutoDiscover"></a>

```typescript
public readonly edgeLambdaAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `cloudfront.experimental.EdgeFunction` for each `.edge-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`). Set to an empty string to not include `main` in your package.json.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `experimentalIntegRunner`<sup>Optional</sup> <a name="experimentalIntegRunner" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.experimentalIntegRunner"></a>

```typescript
public readonly experimentalIntegRunner: boolean;
```

- *Type:* boolean
- *Default:* false

Enable experimental support for the AWS CDK integ-runner.

---

##### `featureFlags`<sup>Optional</sup> <a name="featureFlags" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.featureFlags"></a>

```typescript
public readonly featureFlags: ICdkFeatureFlags;
```

- *Type:* projen.awscdk.ICdkFeatureFlags
- *Default:* no feature flags are enabled by default

Feature flags that should be enabled in `cdk.json`. Make sure to double-check any changes to feature flags in `cdk.json` before deploying. Unexpected changes may cause breaking changes in your CDK app. You can overwrite any feature flag by passing it into the context field.

---

##### `github`<sup>Optional</sup> <a name="github" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### `homebrew`<sup>Optional</sup> <a name="homebrew" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.homebrew"></a>

```typescript
public readonly homebrew: boolean;
```

- *Type:* boolean
- *Default:* true

Enable Homebrew component.

---

##### `homebrewOptions`<sup>Optional</sup> <a name="homebrewOptions" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.homebrewOptions"></a>

```typescript
public readonly homebrewOptions: HomebrewOptions;
```

- *Type:* <a href="#@nikovirtala/projen-constructs.HomebrewOptions">HomebrewOptions</a>
- *Default:* default Homebrew configuration

Homebrew configuration.

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `integrationTestAutoDiscover`<sup>Optional</sup> <a name="integrationTestAutoDiscover" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.integrationTestAutoDiscover"></a>

```typescript
public readonly integrationTestAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically discovers and creates integration tests for each `.integ.ts` file in under your test directory.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `lambdaAutoDiscover`<sup>Optional</sup> <a name="lambdaAutoDiscover" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.lambdaAutoDiscover"></a>

```typescript
public readonly lambdaAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `awscdk.LambdaFunction` for each `.lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `lambdaExtensionAutoDiscover`<sup>Optional</sup> <a name="lambdaExtensionAutoDiscover" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.lambdaExtensionAutoDiscover"></a>

```typescript
public readonly lambdaExtensionAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts` entrypoint in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `lambdaOptions`<sup>Optional</sup> <a name="lambdaOptions" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.lambdaOptions"></a>

```typescript
public readonly lambdaOptions: LambdaFunctionCommonOptions;
```

- *Type:* projen.awscdk.LambdaFunctionCommonOptions
- *Default:* default options

Common options for all AWS Lambda functions.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `license`<sup>Optional</sup> <a name="license" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no maximum version is enforced

The maximum node version supported by this package.

Most projects should not use this option.
The value indicates that the package is incompatible with any newer versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option.
Consider this option only if your package is known to not function with newer versions of node.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no minimum version is enforced

The minimum node version required by this package to function.

Most projects should not use this option.
The value indicates that the package is incompatible with any older versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option, even if your package is incompatible with EOL versions of node.
Consider this option only if your package depends on a specific feature, that is not available in other LTS versions.
Setting this option has very high impact on the consumers of your package,
as package managers will actively prevent usage with node versions you have marked as incompatible.

To change the node version of your CI/CD workflows, use `workflowNodeVersion`.

---

##### `mise`<sup>Optional</sup> <a name="mise" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.mise"></a>

```typescript
public readonly mise: boolean;
```

- *Type:* boolean
- *Default:* true

Enable Mise component.

---

##### `miseOptions`<sup>Optional</sup> <a name="miseOptions" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.miseOptions"></a>

```typescript
public readonly miseOptions: MiseOptions;
```

- *Type:* <a href="#@nikovirtala/projen-constructs.MiseOptions">MiseOptions</a>
- *Default:* default Mise configuration

Mise configuration.

---

##### `nextVersionCommand`<sup>Optional</sup> <a name="nextVersionCommand" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.nextVersionCommand"></a>

```typescript
public readonly nextVersionCommand: string;
```

- *Type:* string
- *Default:* The next version will be determined based on the commit history and project settings.

A shell command to control the next version to release.

If present, this shell command will be run before the bump is executed, and
it determines what version to release. It will be executed in the following
environment:

- Working directory: the project directory.
- `$VERSION`: the current version. Looks like `1.2.3`.
- `$LATEST_TAG`: the most recent tag. Looks like `prefix-v1.2.3`, or may be unset.
- `$SUGGESTED_BUMP`: the suggested bump action based on commits. One of `major|minor|patch|none`.

The command should print one of the following to `stdout`:

- Nothing: the next version number will be determined based on commit history.
- `x.y.z`: the next version number will be `x.y.z`.
- `major|minor|patch`: the next version number will be the current version number
  with the indicated component bumped.

This setting cannot be specified together with `minMajorVersion`; the invoked
script can be used to achieve the effects of `minMajorVersion`.

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.npmProvenance"></a>

```typescript
public readonly npmProvenance: boolean;
```

- *Type:* boolean
- *Default:* true for public packages, false otherwise

Should provenance statements be generated when the package is published.

A supported package manager is required to publish a package with npm provenance statements and
you will need to use a supported CI/CD provider.

Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
which is using npm internally and supports provenance statements independently of the package manager used.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `npmTrustedPublishing`<sup>Optional</sup> <a name="npmTrustedPublishing" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.npmTrustedPublishing"></a>

```typescript
public readonly npmTrustedPublishing: boolean;
```

- *Type:* boolean
- *Default:* false

Use trusted publishing for publishing to npmjs.com Needs to be pre-configured on npm.js to work.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project. Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `package`<sup>Optional</sup> <a name="package" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* Detected from the calling process or `YARN_CLASSIC` if detection fails.

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `pnpmOptions`<sup>Optional</sup> <a name="pnpmOptions" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.pnpmOptions"></a>

```typescript
public readonly pnpmOptions: PnpmOptions;
```

- *Type:* projen.javascript.PnpmOptions
- *Default:* all default options

Options for pnpm.

---

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "10.33.0"

The version of PNPM to use if using PNPM as a package manager.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `projectTree`<sup>Optional</sup> <a name="projectTree" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.projectTree"></a>

```typescript
public readonly projectTree: boolean;
```

- *Type:* boolean
- *Default:* false

Generate a project tree file (`.projen/tree.json`) that shows all components and their relationships. Useful for understanding your project structure and debugging.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `release`<sup>Optional</sup> <a name="release" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: projen.release.BranchOptions}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### `releaseEnvironment`<sup>Optional</sup> <a name="releaseEnvironment" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.releaseEnvironment"></a>

```typescript
public readonly releaseEnvironment: string;
```

- *Type:* string
- *Default:* no environment used, unless set at the artifact level

The GitHub Actions environment used for the release.

This can be used to add an explicit approval step to the release
or limit who can initiate a release through environment protection rules.

When multiple artifacts are released, the environment can be overwritten
on a per artifact basis.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* string
- *Default:* "v"

Automatically add the given prefix to release tags.

Useful if you are releasing on multiple branches with overlapping version numbers.
Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowEnv`<sup>Optional</sup> <a name="releaseWorkflowEnv" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.releaseWorkflowEnv"></a>

```typescript
public readonly releaseWorkflowEnv: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Build environment variables for release workflows.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `requireApproval`<sup>Optional</sup> <a name="requireApproval" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.requireApproval"></a>

```typescript
public readonly requireApproval: ApprovalLevel;
```

- *Type:* projen.awscdk.ApprovalLevel
- *Default:* ApprovalLevel.BROADENING

To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them.

---

##### `runner`<sup>Optional</sup> <a name="runner" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.runner"></a>

```typescript
public readonly runner: TypeScriptRunner;
```

- *Type:* projen.typescript.TypeScriptRunner
- *Default:* TypeScriptRunner.tsNode()

The TypeScript runner to use for executing TypeScript files.

This is a project-level setting that components (e.g. projenrc) will
use as their default runner.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### `singletonLambdaAutoDiscover`<sup>Optional</sup> <a name="singletonLambdaAutoDiscover" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.singletonLambdaAutoDiscover"></a>

```typescript
public readonly singletonLambdaAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `awscdk.SingletonFunction` for each `.singleton-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `stale`<sup>Optional</sup> <a name="stale" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string
- *Default:* "test"

Jest tests directory.

Tests files should be named `xxx.test.ts`.
If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "{testdir}/tsconfig.json"

The name (and path) of the development tsconfig file.

By default this lives inside the test directory (e.g. `test/tsconfig.json`)
so that the TypeScript language service resolves it as the nearest config
for test files.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with commit-and-tag-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `vitest`<sup>Optional</sup> <a name="vitest" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.vitest"></a>

```typescript
public readonly vitest: boolean;
```

- *Type:* boolean
- *Default:* true

Enable Vitest component.

---

##### `vitestOptions`<sup>Optional</sup> <a name="vitestOptions" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.vitestOptions"></a>

```typescript
public readonly vitestOptions: VitestOptions;
```

- *Type:* <a href="#@nikovirtala/projen-constructs.VitestOptions">VitestOptions</a>
- *Default:* default Vitest configuration

Vitest configuration.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `watchExcludes`<sup>Optional</sup> <a name="watchExcludes" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.watchExcludes"></a>

```typescript
public readonly watchExcludes: string[];
```

- *Type:* string[]
- *Default:* []

Glob patterns to exclude from `cdk watch`.

---

##### `watchIncludes`<sup>Optional</sup> <a name="watchIncludes" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.watchIncludes"></a>

```typescript
public readonly watchIncludes: string[];
```

- *Type:* string[]
- *Default:* []

Glob patterns to include in `cdk watch`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* default GitHub Actions user

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* `minNodeVersion` if set, otherwise `lts/*`.

The node version used in GitHub Actions workflows.

Always use this option if your GitHub Actions workflows require a specific to run.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="@nikovirtala/projen-constructs.AwsCdkTypeScriptAppProjectOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

### Bundle <a name="Bundle" id="@nikovirtala/projen-constructs.Bundle"></a>

#### Initializer <a name="Initializer" id="@nikovirtala/projen-constructs.Bundle.Initializer"></a>

```typescript
import { Bundle } from '@nikovirtala/projen-constructs'

const bundle: Bundle = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.Bundle.property.bundleTask">bundleTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.Bundle.property.outdir">outdir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.Bundle.property.outfile">outfile</a></code> | <code>string</code> | *No description.* |

---

##### `bundleTask`<sup>Required</sup> <a name="bundleTask" id="@nikovirtala/projen-constructs.Bundle.property.bundleTask"></a>

```typescript
public readonly bundleTask: Task;
```

- *Type:* projen.Task

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@nikovirtala/projen-constructs.Bundle.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

---

##### `outfile`<sup>Required</sup> <a name="outfile" id="@nikovirtala/projen-constructs.Bundle.property.outfile"></a>

```typescript
public readonly outfile: string;
```

- *Type:* string

---

### BundlerOptions <a name="BundlerOptions" id="@nikovirtala/projen-constructs.BundlerOptions"></a>

#### Initializer <a name="Initializer" id="@nikovirtala/projen-constructs.BundlerOptions.Initializer"></a>

```typescript
import { BundlerOptions } from '@nikovirtala/projen-constructs'

const bundlerOptions: BundlerOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.BundlerOptions.property.addToPreCompile">addToPreCompile</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.BundlerOptions.property.assetsDir">assetsDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.BundlerOptions.property.esbuildVersion">esbuildVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.BundlerOptions.property.loaders">loaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `addToPreCompile`<sup>Optional</sup> <a name="addToPreCompile" id="@nikovirtala/projen-constructs.BundlerOptions.property.addToPreCompile"></a>

```typescript
public readonly addToPreCompile: boolean;
```

- *Type:* boolean

---

##### `assetsDir`<sup>Optional</sup> <a name="assetsDir" id="@nikovirtala/projen-constructs.BundlerOptions.property.assetsDir"></a>

```typescript
public readonly assetsDir: string;
```

- *Type:* string

---

##### `esbuildVersion`<sup>Optional</sup> <a name="esbuildVersion" id="@nikovirtala/projen-constructs.BundlerOptions.property.esbuildVersion"></a>

```typescript
public readonly esbuildVersion: string;
```

- *Type:* string

---

##### `loaders`<sup>Optional</sup> <a name="loaders" id="@nikovirtala/projen-constructs.BundlerOptions.property.loaders"></a>

```typescript
public readonly loaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

### BundlingOptions <a name="BundlingOptions" id="@nikovirtala/projen-constructs.BundlingOptions"></a>

#### Initializer <a name="Initializer" id="@nikovirtala/projen-constructs.BundlingOptions.Initializer"></a>

```typescript
import { BundlingOptions } from '@nikovirtala/projen-constructs'

const bundlingOptions: BundlingOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.BundlingOptions.property.banner">banner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.BundlingOptions.property.externals">externals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.BundlingOptions.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.BundlingOptions.property.loaders">loaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.BundlingOptions.property.mainFields">mainFields</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.BundlingOptions.property.minify">minify</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.BundlingOptions.property.outfile">outfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.BundlingOptions.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.BundlingOptions.property.sourcemap">sourcemap</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.BundlingOptions.property.sourcesContent">sourcesContent</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.BundlingOptions.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.BundlingOptions.property.tsconfigPath">tsconfigPath</a></code> | <code>string</code> | *No description.* |

---

##### `banner`<sup>Optional</sup> <a name="banner" id="@nikovirtala/projen-constructs.BundlingOptions.property.banner"></a>

```typescript
public readonly banner: string;
```

- *Type:* string

---

##### `externals`<sup>Optional</sup> <a name="externals" id="@nikovirtala/projen-constructs.BundlingOptions.property.externals"></a>

```typescript
public readonly externals: string[];
```

- *Type:* string[]

---

##### `format`<sup>Optional</sup> <a name="format" id="@nikovirtala/projen-constructs.BundlingOptions.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `loaders`<sup>Optional</sup> <a name="loaders" id="@nikovirtala/projen-constructs.BundlingOptions.property.loaders"></a>

```typescript
public readonly loaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `mainFields`<sup>Optional</sup> <a name="mainFields" id="@nikovirtala/projen-constructs.BundlingOptions.property.mainFields"></a>

```typescript
public readonly mainFields: string;
```

- *Type:* string

---

##### `minify`<sup>Optional</sup> <a name="minify" id="@nikovirtala/projen-constructs.BundlingOptions.property.minify"></a>

```typescript
public readonly minify: boolean;
```

- *Type:* boolean

---

##### `outfile`<sup>Optional</sup> <a name="outfile" id="@nikovirtala/projen-constructs.BundlingOptions.property.outfile"></a>

```typescript
public readonly outfile: string;
```

- *Type:* string

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@nikovirtala/projen-constructs.BundlingOptions.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `sourcemap`<sup>Optional</sup> <a name="sourcemap" id="@nikovirtala/projen-constructs.BundlingOptions.property.sourcemap"></a>

```typescript
public readonly sourcemap: boolean;
```

- *Type:* boolean

---

##### `sourcesContent`<sup>Optional</sup> <a name="sourcesContent" id="@nikovirtala/projen-constructs.BundlingOptions.property.sourcesContent"></a>

```typescript
public readonly sourcesContent: boolean;
```

- *Type:* boolean

---

##### `target`<sup>Optional</sup> <a name="target" id="@nikovirtala/projen-constructs.BundlingOptions.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `tsconfigPath`<sup>Optional</sup> <a name="tsconfigPath" id="@nikovirtala/projen-constructs.BundlingOptions.property.tsconfigPath"></a>

```typescript
public readonly tsconfigPath: string;
```

- *Type:* string

---

### Component <a name="Component" id="@nikovirtala/projen-constructs.Component"></a>

Configuration for a component to be integrated into a generated project.

#### Initializer <a name="Initializer" id="@nikovirtala/projen-constructs.Component.Initializer"></a>

```typescript
import { Component } from '@nikovirtala/projen-constructs'

const component: Component = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.Component.property.fqn">fqn</a></code> | <code>string</code> | Fully qualified name of the component class. |
| <code><a href="#@nikovirtala/projen-constructs.Component.property.optionsProperty">optionsProperty</a></code> | <code>string \| boolean \| <a href="#@nikovirtala/projen-constructs.ComponentOptions">ComponentOptions</a></code> | Options property configuration for the generated options interface. |

---

##### `fqn`<sup>Optional</sup> <a name="fqn" id="@nikovirtala/projen-constructs.Component.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

Fully qualified name of the component class.

Optional - auto-detected by searching JSII manifests.

---

##### `optionsProperty`<sup>Optional</sup> <a name="optionsProperty" id="@nikovirtala/projen-constructs.Component.property.optionsProperty"></a>

```typescript
public readonly optionsProperty: string | boolean | ComponentOptions;
```

- *Type:* string | boolean | <a href="#@nikovirtala/projen-constructs.ComponentOptions">ComponentOptions</a>

Options property configuration for the generated options interface.

Optional - auto-detected from component constructor.
Set to false to disable options property generation.
Set to string or object to customize the property name.

---

### ComponentOptions <a name="ComponentOptions" id="@nikovirtala/projen-constructs.ComponentOptions"></a>

Options property configuration.

#### Initializer <a name="Initializer" id="@nikovirtala/projen-constructs.ComponentOptions.Initializer"></a>

```typescript
import { ComponentOptions } from '@nikovirtala/projen-constructs'

const componentOptions: ComponentOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.ComponentOptions.property.name">name</a></code> | <code>string</code> | Name of the options property. |
| <code><a href="#@nikovirtala/projen-constructs.ComponentOptions.property.docs">docs</a></code> | <code>string</code> | Documentation summary (optional, auto-detected from component constructor). |
| <code><a href="#@nikovirtala/projen-constructs.ComponentOptions.property.type">type</a></code> | <code>string</code> | Fully qualified type name (optional, auto-detected from component constructor). |

---

##### `name`<sup>Required</sup> <a name="name" id="@nikovirtala/projen-constructs.ComponentOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the options property.

---

##### `docs`<sup>Optional</sup> <a name="docs" id="@nikovirtala/projen-constructs.ComponentOptions.property.docs"></a>

```typescript
public readonly docs: string;
```

- *Type:* string

Documentation summary (optional, auto-detected from component constructor).

---

##### `type`<sup>Optional</sup> <a name="type" id="@nikovirtala/projen-constructs.ComponentOptions.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Fully qualified type name (optional, auto-detected from component constructor).

---

### HomebrewOptions <a name="HomebrewOptions" id="@nikovirtala/projen-constructs.HomebrewOptions"></a>

#### Initializer <a name="Initializer" id="@nikovirtala/projen-constructs.HomebrewOptions.Initializer"></a>

```typescript
import { HomebrewOptions } from '@nikovirtala/projen-constructs'

const homebrewOptions: HomebrewOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.HomebrewOptions.property.packages">packages</a></code> | <code>string[]</code> | *No description.* |

---

##### `packages`<sup>Optional</sup> <a name="packages" id="@nikovirtala/projen-constructs.HomebrewOptions.property.packages"></a>

```typescript
public readonly packages: string[];
```

- *Type:* string[]

---

### JsiiProjectOptions <a name="JsiiProjectOptions" id="@nikovirtala/projen-constructs.JsiiProjectOptions"></a>

JsiiProjectOptions.

#### Initializer <a name="Initializer" id="@nikovirtala/projen-constructs.JsiiProjectOptions.Initializer"></a>

```typescript
import { JsiiProjectOptions } from '@nikovirtala/projen-constructs'

const jsiiProjectOptions: JsiiProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.author">author</a></code> | <code>string</code> | The name of the library author. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.authorAddress">authorAddress</a></code> | <code>string</code> | Email or URL of the library author. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | Git repository URL. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.addPackageManagerToDevEngines">addPackageManagerToDevEngines</a></code> | <code>boolean</code> | Automatically add the resolved `packageManager` to `devEngines.packageManager` in `package.json`, setting `onFail` to `ignore`. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.allowScripts">allowScripts</a></code> | <code>string[]</code> | List of dependency (package) names that are allowed to run lifecycle install scripts (`preinstall`, `install`, `postinstall`, `prepare`) during dependency installation. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.auditDeps">auditDeps</a></code> | <code>boolean</code> | Run security audit on dependencies. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.auditDepsOptions">auditDepsOptions</a></code> | <code>projen.javascript.AuditOptions</code> | Security audit options. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configured). |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.biome">biome</a></code> | <code>boolean</code> | Setup Biome. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.biomeOptions">biomeOptions</a></code> | <code>projen.javascript.BiomeOptions</code> | Biome options. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.bumpPackage">bumpPackage</a></code> | <code>string</code> | The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.bunVersion">bunVersion</a></code> | <code>string</code> | The version of Bun to use if using Bun as a package manager. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v5 By default, OIDC auth is used. Alternatively a token can be provided via `codeCovTokenSecret`. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.compat">compat</a></code> | <code>boolean</code> | Automatically run API compatibility test against the latest version published to npm after compilation. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.compatIgnore">compatIgnore</a></code> | <code>string</code> | Name of the ignore file for API compatibility tests. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.compressAssembly">compressAssembly</a></code> | <code>boolean</code> | Emit a compressed version of the assembly. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.deleteOrphanedLockFiles">deleteOrphanedLockFiles</a></code> | <code>boolean</code> | Automatically delete lockfiles from package managers that are not the active one. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.devEngines">devEngines</a></code> | <code>projen.javascript.DevEngines</code> | Configure the `devEngines` field in `package.json`. The `devEngines.packageManager` field is automatically populated based on the resolved `packageManager` value. Any fields provided here are merged with the auto-populated `packageManager` entry. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a development tsconfig file. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.docgenFilePath">docgenFilePath</a></code> | <code>string</code> | File path for generated docs. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). Set to an empty string to not include `main` in your package.json. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.excludeTypescript">excludeTypescript</a></code> | <code>string[]</code> | Accepts a list of glob patterns. Files matching any of those patterns will be excluded from the TypeScript compiler input. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.homebrew">homebrew</a></code> | <code>boolean</code> | Enable Homebrew component. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.homebrewOptions">homebrewOptions</a></code> | <code><a href="#@nikovirtala/projen-constructs.HomebrewOptions">HomebrewOptions</a></code> | Homebrew configuration. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.jsiiVersion">jsiiVersion</a></code> | <code>string</code> | Version of the jsii compiler to use. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | The maximum node version supported by this package. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.mise">mise</a></code> | <code>boolean</code> | Enable Mise component. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.miseOptions">miseOptions</a></code> | <code><a href="#@nikovirtala/projen-constructs.MiseOptions">MiseOptions</a></code> | Mise configuration. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.nextVersionCommand">nextVersionCommand</a></code> | <code>string</code> | A shell command to control the next version to release. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.npmTrustedPublishing">npmTrustedPublishing</a></code> | <code>boolean</code> | Use trusted publishing for publishing to npmjs.com Needs to be pre-configured on npm.js to work. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. Relative to this directory, all files are synthesized. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.pnpmOptions">pnpmOptions</a></code> | <code>projen.javascript.PnpmOptions</code> | Options for pnpm. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.projectTree">projectTree</a></code> | <code>boolean</code> | Generate a project tree file (`.projen/tree.json`) that shows all components and their relationships. Useful for understanding your project structure and debugging. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.publishToGo">publishToGo</a></code> | <code>projen.cdk.JsiiGoTarget</code> | Publish Go bindings to a git repository. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.publishToMaven">publishToMaven</a></code> | <code>projen.cdk.JsiiJavaTarget</code> | Publish to maven. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.publishToNuget">publishToNuget</a></code> | <code>projen.cdk.JsiiDotNetTarget</code> | Publish to NuGet. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.publishToPypi">publishToPypi</a></code> | <code>projen.cdk.JsiiPythonTarget</code> | Publish to pypi. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.releaseEnvironment">releaseEnvironment</a></code> | <code>string</code> | The GitHub Actions environment used for the release. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.releaseWorkflowEnv">releaseWorkflowEnv</a></code> | <code>{[ key: string ]: string}</code> | Build environment variables for release workflows. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.rootdir">rootdir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.runner">runner</a></code> | <code>projen.typescript.TypeScriptRunner</code> | The TypeScript runner to use for executing TypeScript files. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom TSConfig. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name (and path) of the development tsconfig file. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.typeDoc">typeDoc</a></code> | <code>boolean</code> | Enable TypeDoc component. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.typeDocOptions">typeDocOptions</a></code> | <code><a href="#@nikovirtala/projen-constructs.TypeDocOptions">TypeDocOptions</a></code> | TypeDoc configuration. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.validateTsconfig">validateTsconfig</a></code> | <code>projen.cdk.ValidateTsconfig</code> | Level of tsconfig validation jsii should perform on the user-provided tsconfig. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with commit-and-tag-version package. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.vitest">vitest</a></code> | <code>boolean</code> | Enable Vitest component. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.vitestOptions">vitestOptions</a></code> | <code><a href="#@nikovirtala/projen-constructs.VitestOptions">VitestOptions</a></code> | Vitest configuration. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version used in GitHub Actions workflows. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#@nikovirtala/projen-constructs.JsiiProjectOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |

---

##### `author`<sup>Required</sup> <a name="author" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.author"></a>

```typescript
public readonly author: string;
```

- *Type:* string
- *Default:* $GIT_USER_NAME

The name of the library author.

---

##### `authorAddress`<sup>Required</sup> <a name="authorAddress" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.authorAddress"></a>

```typescript
public readonly authorAddress: string;
```

- *Type:* string
- *Default:* $GIT_USER_EMAIL

Email or URL of the library author.

---

##### `name`<sup>Required</sup> <a name="name" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string
- *Default:* $GIT_REMOTE

Git repository URL.

---

##### `addPackageManagerToDevEngines`<sup>Optional</sup> <a name="addPackageManagerToDevEngines" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.addPackageManagerToDevEngines"></a>

```typescript
public readonly addPackageManagerToDevEngines: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add the resolved `packageManager` to `devEngines.packageManager` in `package.json`, setting `onFail` to `ignore`.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `allowScripts`<sup>Optional</sup> <a name="allowScripts" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.allowScripts"></a>

```typescript
public readonly allowScripts: string[];
```

- *Type:* string[]
- *Default:* all install scripts are allowed to run (package manager default)

List of dependency (package) names that are allowed to run lifecycle install scripts (`preinstall`, `install`, `postinstall`, `prepare`) during dependency installation.

These scripts can execute arbitrary code, making them a common
supply-chain attack vector. Package managers are moving toward
blocking them by default and requiring an explicit allowlist.
Configuring `allowScripts` sets up that allowlist so scripts only run
for the packages you have explicitly reviewed and trust.

Support for this setting depends on the configured `packageManager`:

- `NPM`: written to the native `allowScripts` field in `package.json`
  (requires npm >= 11.16; see https://docs.npmjs.com/cli/v11/commands/npm-approve-scripts).
- `BUN`: written to the native `trustedDependencies` field in
  `package.json` (see https://bun.com/docs/pm/lifecycle).
- `PNPM`: written to the `onlyBuiltDependencies` setting in
  `pnpm-workspace.yaml` (see https://pnpm.io/settings#onlybuiltdependencies).
- `YARN2`, `YARN_BERRY`: written to the native
  `dependenciesMeta.<pkg>.built` allowlist in `package.json`, combined
  with `enableScripts: false` in `.yarnrc.yml` (see
  https://yarnpkg.com/features/security#postinstalls). If you set
  `yarnBerryOptions.yarnRcOptions.enableScripts` explicitly, that value
  is respected instead of being overridden.
- `YARN`, `YARN_CLASSIC`: not supported. Yarn Classic has no native
  mechanism to allowlist install scripts for specific dependencies.
  Setting this option with one of these package managers throws an
  error at synthesis time.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `auditDeps`<sup>Optional</sup> <a name="auditDeps" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.auditDeps"></a>

```typescript
public readonly auditDeps: boolean;
```

- *Type:* boolean
- *Default:* false

Run security audit on dependencies.

When enabled, creates an "audit" task that checks for known security vulnerabilities
in dependencies. By default, runs during every build and checks for "high" severity
vulnerabilities or above in all dependencies (including dev dependencies).

---

##### `auditDepsOptions`<sup>Optional</sup> <a name="auditDepsOptions" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.auditDepsOptions"></a>

```typescript
public readonly auditDepsOptions: AuditOptions;
```

- *Type:* projen.javascript.AuditOptions
- *Default:* default options

Security audit options.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configured).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `biome`<sup>Optional</sup> <a name="biome" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.biome"></a>

```typescript
public readonly biome: boolean;
```

- *Type:* boolean
- *Default:* false

Setup Biome.

---

##### `biomeOptions`<sup>Optional</sup> <a name="biomeOptions" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.biomeOptions"></a>

```typescript
public readonly biomeOptions: BiomeOptions;
```

- *Type:* projen.javascript.BiomeOptions
- *Default:* default options

Biome options.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### `bumpPackage`<sup>Optional</sup> <a name="bumpPackage" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.bumpPackage"></a>

```typescript
public readonly bumpPackage: string;
```

- *Type:* string
- *Default:* A recent version of "commit-and-tag-version"

The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string.

This can be any compatible package version, including the deprecated `standard-version@9`.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `pnpm add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `pnpm add` or `npm i` (e.g. `express@^2`) and
this will be what your `package.json` will eventually include.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `bunVersion`<sup>Optional</sup> <a name="bunVersion" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.bunVersion"></a>

```typescript
public readonly bunVersion: string;
```

- *Type:* string
- *Default:* "latest"

The version of Bun to use if using Bun as a package manager.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v5 By default, OIDC auth is used. Alternatively a token can be provided via `codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* OIDC auth is used

Define the secret name for a specified https://codecov.io/ token.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `compat`<sup>Optional</sup> <a name="compat" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.compat"></a>

```typescript
public readonly compat: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically run API compatibility test against the latest version published to npm after compilation.

You can manually run compatibility tests using `yarn compat` if this feature is disabled.
- You can ignore compatibility failures by adding lines to a ".compatignore" file.

---

##### `compatIgnore`<sup>Optional</sup> <a name="compatIgnore" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.compatIgnore"></a>

```typescript
public readonly compatIgnore: string;
```

- *Type:* string
- *Default:* ".compatignore"

Name of the ignore file for API compatibility tests.

---

##### `compressAssembly`<sup>Optional</sup> <a name="compressAssembly" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.compressAssembly"></a>

```typescript
public readonly compressAssembly: boolean;
```

- *Type:* boolean
- *Default:* false

Emit a compressed version of the assembly.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

This value is only used if the selected license text contains the
`$copyright_owner` placeholder. For example, it has no effect on the
MPL-2.0 license text.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

This value is only used if the selected license text contains the
`$copyright_period` placeholder. For example, it has no effect on the
MPL-2.0 license text.

---

##### `defaultReleaseBranch`<sup>Optional</sup> <a name="defaultReleaseBranch" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `deleteOrphanedLockFiles`<sup>Optional</sup> <a name="deleteOrphanedLockFiles" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.deleteOrphanedLockFiles"></a>

```typescript
public readonly deleteOrphanedLockFiles: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically delete lockfiles from package managers that are not the active one.

Only triggered when the lockfile for the configured package
manager already exists.

This is useful when migrating between package managers to avoid conflicts.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `pnpm add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `pnpm add` or `npm i` (e.g. `express@^2`) and
this will be what your `package.json` will eventually include.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* `true` for root projects, `false` for subprojects

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `description`<sup>Optional</sup> <a name="description" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `pnpm add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `pnpm add` or `npm i` (e.g. `express@^2`) and
this will be what your `package.json` will eventually include.

---

##### `devEngines`<sup>Optional</sup> <a name="devEngines" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.devEngines"></a>

```typescript
public readonly devEngines: DevEngines;
```

- *Type:* projen.javascript.DevEngines

Configure the `devEngines` field in `package.json`. The `devEngines.packageManager` field is automatically populated based on the resolved `packageManager` value. Any fields provided here are merged with the auto-populated `packageManager` entry.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a development tsconfig file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docgenFilePath`<sup>Optional</sup> <a name="docgenFilePath" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.docgenFilePath"></a>

```typescript
public readonly docgenFilePath: string;
```

- *Type:* string
- *Default:* "API.md"

File path for generated docs.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`). Set to an empty string to not include `main` in your package.json.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `excludeTypescript`<sup>Optional</sup> <a name="excludeTypescript" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.excludeTypescript"></a>

```typescript
public readonly excludeTypescript: string[];
```

- *Type:* string[]

Accepts a list of glob patterns. Files matching any of those patterns will be excluded from the TypeScript compiler input.

By default, jsii will include all *.ts files (except .d.ts files) in the TypeScript compiler input.
This can be problematic for example when the package's build or test procedure generates .ts files
that cannot be compiled with jsii's compiler settings.

---

##### `github`<sup>Optional</sup> <a name="github" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### `homebrew`<sup>Optional</sup> <a name="homebrew" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.homebrew"></a>

```typescript
public readonly homebrew: boolean;
```

- *Type:* boolean
- *Default:* true

Enable Homebrew component.

---

##### `homebrewOptions`<sup>Optional</sup> <a name="homebrewOptions" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.homebrewOptions"></a>

```typescript
public readonly homebrewOptions: HomebrewOptions;
```

- *Type:* <a href="#@nikovirtala/projen-constructs.HomebrewOptions">HomebrewOptions</a>
- *Default:* default Homebrew configuration

Homebrew configuration.

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `jsiiVersion`<sup>Optional</sup> <a name="jsiiVersion" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.jsiiVersion"></a>

```typescript
public readonly jsiiVersion: string;
```

- *Type:* string
- *Default:* "~5.9.0"

Version of the jsii compiler to use.

Set to "*" if you want to manually manage the version of jsii in your
project by managing updates to `package.json` on your own.

NOTE: The jsii compiler releases since 5.0.0 are not semantically versioned
and should remain on the same minor, so we recommend using a `~` dependency
(e.g. `~5.0.0`).

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `license`<sup>Optional</sup> <a name="license" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no maximum version is enforced

The maximum node version supported by this package.

Most projects should not use this option.
The value indicates that the package is incompatible with any newer versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option.
Consider this option only if your package is known to not function with newer versions of node.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no minimum version is enforced

The minimum node version required by this package to function.

Most projects should not use this option.
The value indicates that the package is incompatible with any older versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option, even if your package is incompatible with EOL versions of node.
Consider this option only if your package depends on a specific feature, that is not available in other LTS versions.
Setting this option has very high impact on the consumers of your package,
as package managers will actively prevent usage with node versions you have marked as incompatible.

To change the node version of your CI/CD workflows, use `workflowNodeVersion`.

---

##### `mise`<sup>Optional</sup> <a name="mise" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.mise"></a>

```typescript
public readonly mise: boolean;
```

- *Type:* boolean
- *Default:* true

Enable Mise component.

---

##### `miseOptions`<sup>Optional</sup> <a name="miseOptions" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.miseOptions"></a>

```typescript
public readonly miseOptions: MiseOptions;
```

- *Type:* <a href="#@nikovirtala/projen-constructs.MiseOptions">MiseOptions</a>
- *Default:* default Mise configuration

Mise configuration.

---

##### `nextVersionCommand`<sup>Optional</sup> <a name="nextVersionCommand" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.nextVersionCommand"></a>

```typescript
public readonly nextVersionCommand: string;
```

- *Type:* string
- *Default:* The next version will be determined based on the commit history and project settings.

A shell command to control the next version to release.

If present, this shell command will be run before the bump is executed, and
it determines what version to release. It will be executed in the following
environment:

- Working directory: the project directory.
- `$VERSION`: the current version. Looks like `1.2.3`.
- `$LATEST_TAG`: the most recent tag. Looks like `prefix-v1.2.3`, or may be unset.
- `$SUGGESTED_BUMP`: the suggested bump action based on commits. One of `major|minor|patch|none`.

The command should print one of the following to `stdout`:

- Nothing: the next version number will be determined based on commit history.
- `x.y.z`: the next version number will be `x.y.z`.
- `major|minor|patch`: the next version number will be the current version number
  with the indicated component bumped.

This setting cannot be specified together with `minMajorVersion`; the invoked
script can be used to achieve the effects of `minMajorVersion`.

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.npmProvenance"></a>

```typescript
public readonly npmProvenance: boolean;
```

- *Type:* boolean
- *Default:* true for public packages, false otherwise

Should provenance statements be generated when the package is published.

A supported package manager is required to publish a package with npm provenance statements and
you will need to use a supported CI/CD provider.

Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
which is using npm internally and supports provenance statements independently of the package manager used.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `npmTrustedPublishing`<sup>Optional</sup> <a name="npmTrustedPublishing" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.npmTrustedPublishing"></a>

```typescript
public readonly npmTrustedPublishing: boolean;
```

- *Type:* boolean
- *Default:* false

Use trusted publishing for publishing to npmjs.com Needs to be pre-configured on npm.js to work.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project. Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `package`<sup>Optional</sup> <a name="package" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* Detected from the calling process or `YARN_CLASSIC` if detection fails.

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `pnpmOptions`<sup>Optional</sup> <a name="pnpmOptions" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.pnpmOptions"></a>

```typescript
public readonly pnpmOptions: PnpmOptions;
```

- *Type:* projen.javascript.PnpmOptions
- *Default:* all default options

Options for pnpm.

---

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "10.33.0"

The version of PNPM to use if using PNPM as a package manager.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `projectTree`<sup>Optional</sup> <a name="projectTree" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.projectTree"></a>

```typescript
public readonly projectTree: boolean;
```

- *Type:* boolean
- *Default:* false

Generate a project tree file (`.projen/tree.json`) that shows all components and their relationships. Useful for understanding your project structure and debugging.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `publishToGo`<sup>Optional</sup> <a name="publishToGo" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.publishToGo"></a>

```typescript
public readonly publishToGo: JsiiGoTarget;
```

- *Type:* projen.cdk.JsiiGoTarget
- *Default:* no publishing

Publish Go bindings to a git repository.

---

##### `publishToMaven`<sup>Optional</sup> <a name="publishToMaven" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.publishToMaven"></a>

```typescript
public readonly publishToMaven: JsiiJavaTarget;
```

- *Type:* projen.cdk.JsiiJavaTarget
- *Default:* no publishing

Publish to maven.

---

##### `publishToNuget`<sup>Optional</sup> <a name="publishToNuget" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.publishToNuget"></a>

```typescript
public readonly publishToNuget: JsiiDotNetTarget;
```

- *Type:* projen.cdk.JsiiDotNetTarget
- *Default:* no publishing

Publish to NuGet.

---

##### `publishToPypi`<sup>Optional</sup> <a name="publishToPypi" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.publishToPypi"></a>

```typescript
public readonly publishToPypi: JsiiPythonTarget;
```

- *Type:* projen.cdk.JsiiPythonTarget
- *Default:* no publishing

Publish to pypi.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `release`<sup>Optional</sup> <a name="release" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: projen.release.BranchOptions}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### `releaseEnvironment`<sup>Optional</sup> <a name="releaseEnvironment" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.releaseEnvironment"></a>

```typescript
public readonly releaseEnvironment: string;
```

- *Type:* string
- *Default:* no environment used, unless set at the artifact level

The GitHub Actions environment used for the release.

This can be used to add an explicit approval step to the release
or limit who can initiate a release through environment protection rules.

When multiple artifacts are released, the environment can be overwritten
on a per artifact basis.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* string
- *Default:* "v"

Automatically add the given prefix to release tags.

Useful if you are releasing on multiple branches with overlapping version numbers.
Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowEnv`<sup>Optional</sup> <a name="releaseWorkflowEnv" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.releaseWorkflowEnv"></a>

```typescript
public readonly releaseWorkflowEnv: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Build environment variables for release workflows.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `rootdir`<sup>Optional</sup> <a name="rootdir" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.rootdir"></a>

```typescript
public readonly rootdir: string;
```

- *Type:* string
- *Default:* "."

---

##### `runner`<sup>Optional</sup> <a name="runner" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.runner"></a>

```typescript
public readonly runner: TypeScriptRunner;
```

- *Type:* projen.typescript.TypeScriptRunner
- *Default:* TypeScriptRunner.tsNode()

The TypeScript runner to use for executing TypeScript files.

This is a project-level setting that components (e.g. projenrc) will
use as their default runner.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `stale`<sup>Optional</sup> <a name="stale" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string
- *Default:* "test"

Jest tests directory.

Tests files should be named `xxx.test.ts`.
If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "{testdir}/tsconfig.json"

The name (and path) of the development tsconfig file.

By default this lives inside the test directory (e.g. `test/tsconfig.json`)
so that the TypeScript language service resolves it as the nearest config
for test files.

---

##### `typeDoc`<sup>Optional</sup> <a name="typeDoc" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.typeDoc"></a>

```typescript
public readonly typeDoc: boolean;
```

- *Type:* boolean
- *Default:* true

Enable TypeDoc component.

---

##### `typeDocOptions`<sup>Optional</sup> <a name="typeDocOptions" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.typeDocOptions"></a>

```typescript
public readonly typeDocOptions: TypeDocOptions;
```

- *Type:* <a href="#@nikovirtala/projen-constructs.TypeDocOptions">TypeDocOptions</a>
- *Default:* default TypeDoc configuration

TypeDoc configuration.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `validateTsconfig`<sup>Optional</sup> <a name="validateTsconfig" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.validateTsconfig"></a>

```typescript
public readonly validateTsconfig: ValidateTsconfig;
```

- *Type:* projen.cdk.ValidateTsconfig
- *Default:* ValidateTsconfig.STRICT

Level of tsconfig validation jsii should perform on the user-provided tsconfig.

Only relevant when the project synthesizes its own tsconfig
(i.e. `disableTsconfig` is not set on the TypeScriptProject).

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with commit-and-tag-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `vitest`<sup>Optional</sup> <a name="vitest" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.vitest"></a>

```typescript
public readonly vitest: boolean;
```

- *Type:* boolean
- *Default:* true

Enable Vitest component.

---

##### `vitestOptions`<sup>Optional</sup> <a name="vitestOptions" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.vitestOptions"></a>

```typescript
public readonly vitestOptions: VitestOptions;
```

- *Type:* <a href="#@nikovirtala/projen-constructs.VitestOptions">VitestOptions</a>
- *Default:* default Vitest configuration

Vitest configuration.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* default GitHub Actions user

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* `minNodeVersion` if set, otherwise `lts/*`.

The node version used in GitHub Actions workflows.

Always use this option if your GitHub Actions workflows require a specific to run.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="@nikovirtala/projen-constructs.JsiiProjectOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

### LambdaFunctionCodeBundleOptions <a name="LambdaFunctionCodeBundleOptions" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundleOptions"></a>

#### Initializer <a name="Initializer" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundleOptions.Initializer"></a>

```typescript
import { LambdaFunctionCodeBundleOptions } from '@nikovirtala/projen-constructs'

const lambdaFunctionCodeBundleOptions: LambdaFunctionCodeBundleOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundleOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundleOptions.property.extension">extension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundleOptions.property.bundlingOptions">bundlingOptions</a></code> | <code><a href="#@nikovirtala/projen-constructs.BundlingOptions">BundlingOptions</a></code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundleOptions.property.constructFile">constructFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundleOptions.property.constructName">constructName</a></code> | <code>string</code> | *No description.* |

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundleOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### `extension`<sup>Required</sup> <a name="extension" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundleOptions.property.extension"></a>

```typescript
public readonly extension: string;
```

- *Type:* string

---

##### `bundlingOptions`<sup>Optional</sup> <a name="bundlingOptions" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundleOptions.property.bundlingOptions"></a>

```typescript
public readonly bundlingOptions: BundlingOptions;
```

- *Type:* <a href="#@nikovirtala/projen-constructs.BundlingOptions">BundlingOptions</a>

---

##### `constructFile`<sup>Optional</sup> <a name="constructFile" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundleOptions.property.constructFile"></a>

```typescript
public readonly constructFile: string;
```

- *Type:* string

---

##### `constructName`<sup>Optional</sup> <a name="constructName" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundleOptions.property.constructName"></a>

```typescript
public readonly constructName: string;
```

- *Type:* string

---

### LambdaFunctionCodeBundlerOptions <a name="LambdaFunctionCodeBundlerOptions" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundlerOptions"></a>

#### Initializer <a name="Initializer" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundlerOptions.Initializer"></a>

```typescript
import { LambdaFunctionCodeBundlerOptions } from '@nikovirtala/projen-constructs'

const lambdaFunctionCodeBundlerOptions: LambdaFunctionCodeBundlerOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundlerOptions.property.extension">extension</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundlerOptions.property.srcdir">srcdir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundlerOptions.property.bundleOptions">bundleOptions</a></code> | <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundleOptions">LambdaFunctionCodeBundleOptions</a></code> | *No description.* |

---

##### `extension`<sup>Required</sup> <a name="extension" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundlerOptions.property.extension"></a>

```typescript
public readonly extension: string;
```

- *Type:* string

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundlerOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

---

##### `bundleOptions`<sup>Optional</sup> <a name="bundleOptions" id="@nikovirtala/projen-constructs.LambdaFunctionCodeBundlerOptions.property.bundleOptions"></a>

```typescript
public readonly bundleOptions: LambdaFunctionCodeBundleOptions;
```

- *Type:* <a href="#@nikovirtala/projen-constructs.LambdaFunctionCodeBundleOptions">LambdaFunctionCodeBundleOptions</a>

---

### LambdaFunctionConstructGeneratorOptions <a name="LambdaFunctionConstructGeneratorOptions" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGeneratorOptions"></a>

#### Initializer <a name="Initializer" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGeneratorOptions.Initializer"></a>

```typescript
import { LambdaFunctionConstructGeneratorOptions } from '@nikovirtala/projen-constructs'

const lambdaFunctionConstructGeneratorOptions: LambdaFunctionConstructGeneratorOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionConstructGeneratorOptions.property.addDependencies">addDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionConstructGeneratorOptions.property.baseConstructClass">baseConstructClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionConstructGeneratorOptions.property.baseConstructImport">baseConstructImport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionConstructGeneratorOptions.property.baseConstructPackage">baseConstructPackage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionConstructGeneratorOptions.property.esbuildOptions">esbuildOptions</a></code> | <code>@mrgrain/cdk-esbuild.BuildOptions</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionConstructGeneratorOptions.property.filePattern">filePattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionConstructGeneratorOptions.property.outputDir">outputDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.LambdaFunctionConstructGeneratorOptions.property.sourceDir">sourceDir</a></code> | <code>string</code> | *No description.* |

---

##### `addDependencies`<sup>Optional</sup> <a name="addDependencies" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGeneratorOptions.property.addDependencies"></a>

```typescript
public readonly addDependencies: boolean;
```

- *Type:* boolean

---

##### `baseConstructClass`<sup>Optional</sup> <a name="baseConstructClass" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGeneratorOptions.property.baseConstructClass"></a>

```typescript
public readonly baseConstructClass: string;
```

- *Type:* string

---

##### `baseConstructImport`<sup>Optional</sup> <a name="baseConstructImport" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGeneratorOptions.property.baseConstructImport"></a>

```typescript
public readonly baseConstructImport: string;
```

- *Type:* string

---

##### `baseConstructPackage`<sup>Optional</sup> <a name="baseConstructPackage" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGeneratorOptions.property.baseConstructPackage"></a>

```typescript
public readonly baseConstructPackage: string;
```

- *Type:* string

---

##### `esbuildOptions`<sup>Optional</sup> <a name="esbuildOptions" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGeneratorOptions.property.esbuildOptions"></a>

```typescript
public readonly esbuildOptions: BuildOptions;
```

- *Type:* @mrgrain/cdk-esbuild.BuildOptions

---

##### `filePattern`<sup>Optional</sup> <a name="filePattern" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGeneratorOptions.property.filePattern"></a>

```typescript
public readonly filePattern: string;
```

- *Type:* string

---

##### `outputDir`<sup>Optional</sup> <a name="outputDir" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGeneratorOptions.property.outputDir"></a>

```typescript
public readonly outputDir: string;
```

- *Type:* string

---

##### `sourceDir`<sup>Optional</sup> <a name="sourceDir" id="@nikovirtala/projen-constructs.LambdaFunctionConstructGeneratorOptions.property.sourceDir"></a>

```typescript
public readonly sourceDir: string;
```

- *Type:* string

---

### LocalStackOptions <a name="LocalStackOptions" id="@nikovirtala/projen-constructs.LocalStackOptions"></a>

#### Initializer <a name="Initializer" id="@nikovirtala/projen-constructs.LocalStackOptions.Initializer"></a>

```typescript
import { LocalStackOptions } from '@nikovirtala/projen-constructs'

const localStackOptions: LocalStackOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.LocalStackOptions.property.debug">debug</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.LocalStackOptions.property.imageTag">imageTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.LocalStackOptions.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@nikovirtala/projen-constructs.LocalStackOptions.property.services">services</a></code> | <code>string[]</code> | *No description.* |

---

##### `debug`<sup>Optional</sup> <a name="debug" id="@nikovirtala/projen-constructs.LocalStackOptions.property.debug"></a>

```typescript
public readonly debug: boolean;
```

- *Type:* boolean

---

##### `imageTag`<sup>Optional</sup> <a name="imageTag" id="@nikovirtala/projen-constructs.LocalStackOptions.property.imageTag"></a>

```typescript
public readonly imageTag: string;
```

- *Type:* string

---

##### `port`<sup>Optional</sup> <a name="port" id="@nikovirtala/projen-constructs.LocalStackOptions.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `services`<sup>Optional</sup> <a name="services" id="@nikovirtala/projen-constructs.LocalStackOptions.property.services"></a>

```typescript
public readonly services: string[];
```

- *Type:* string[]

---

### MiseOptions <a name="MiseOptions" id="@nikovirtala/projen-constructs.MiseOptions"></a>

#### Initializer <a name="Initializer" id="@nikovirtala/projen-constructs.MiseOptions.Initializer"></a>

```typescript
import { MiseOptions } from '@nikovirtala/projen-constructs'

const miseOptions: MiseOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.MiseOptions.property.nodeVersion">nodeVersion</a></code> | <code>string</code> | *No description.* |

---

##### `nodeVersion`<sup>Optional</sup> <a name="nodeVersion" id="@nikovirtala/projen-constructs.MiseOptions.property.nodeVersion"></a>

```typescript
public readonly nodeVersion: string;
```

- *Type:* string

---

### ProjectGeneratorOptions <a name="ProjectGeneratorOptions" id="@nikovirtala/projen-constructs.ProjectGeneratorOptions"></a>

Options for ProjectGenerator component.

Configures the generation of a TypeScript project class that extends a Projen base class
with standard configuration and component integration.

#### Initializer <a name="Initializer" id="@nikovirtala/projen-constructs.ProjectGeneratorOptions.Initializer"></a>

```typescript
import { ProjectGeneratorOptions } from '@nikovirtala/projen-constructs'

const projectGeneratorOptions: ProjectGeneratorOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.ProjectGeneratorOptions.property.executable">executable</a></code> | <code>boolean</code> | Whether the generated file should be marked as executable. |
| <code><a href="#@nikovirtala/projen-constructs.ProjectGeneratorOptions.property.indent">indent</a></code> | <code>number</code> | Indentation size. |
| <code><a href="#@nikovirtala/projen-constructs.ProjectGeneratorOptions.property.readonly">readonly</a></code> | <code>boolean</code> | Whether the generated file should be readonly. |
| <code><a href="#@nikovirtala/projen-constructs.ProjectGeneratorOptions.property.filePath">filePath</a></code> | <code>string</code> | Output file path for the generated class. |
| <code><a href="#@nikovirtala/projen-constructs.ProjectGeneratorOptions.property.name">name</a></code> | <code>string</code> | Name of the generated class (e.g., "TypeScriptProject"). |
| <code><a href="#@nikovirtala/projen-constructs.ProjectGeneratorOptions.property.projectType">projectType</a></code> | <code><a href="#@nikovirtala/projen-constructs.ProjectType">ProjectType</a></code> | Project type identifier. |
| <code><a href="#@nikovirtala/projen-constructs.ProjectGeneratorOptions.property.components">components</a></code> | <code><a href="#@nikovirtala/projen-constructs.Component">Component</a>[]</code> | Components to integrate into the project. |
| <code><a href="#@nikovirtala/projen-constructs.ProjectGeneratorOptions.property.omitOptions">omitOptions</a></code> | <code>string[]</code> | Property names to omit from the base options interface. |

---

##### `executable`<sup>Optional</sup> <a name="executable" id="@nikovirtala/projen-constructs.ProjectGeneratorOptions.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean
- *Default:* false

Whether the generated file should be marked as executable.

---

##### `indent`<sup>Optional</sup> <a name="indent" id="@nikovirtala/projen-constructs.ProjectGeneratorOptions.property.indent"></a>

```typescript
public readonly indent: number;
```

- *Type:* number
- *Default:* 2

Indentation size.

---

##### `readonly`<sup>Optional</sup> <a name="readonly" id="@nikovirtala/projen-constructs.ProjectGeneratorOptions.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean
- *Default:* true

Whether the generated file should be readonly.

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="@nikovirtala/projen-constructs.ProjectGeneratorOptions.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string

Output file path for the generated class.

Must contain a directory separator. The options interface will be generated
in the same directory with a ".generated.ts" suffix.

---

*Example*

```typescript
"src/projects/typescript.generated.ts"
```


##### `name`<sup>Required</sup> <a name="name" id="@nikovirtala/projen-constructs.ProjectGeneratorOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the generated class (e.g., "TypeScriptProject").

The options interface will be named `${name}Options`.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@nikovirtala/projen-constructs.ProjectGeneratorOptions.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* <a href="#@nikovirtala/projen-constructs.ProjectType">ProjectType</a>

Project type identifier.

Specifies which Projen base class to extend and which default configuration to apply.

---

*Example*

```typescript
ProjectType.JSII
```


##### `components`<sup>Optional</sup> <a name="components" id="@nikovirtala/projen-constructs.ProjectGeneratorOptions.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* <a href="#@nikovirtala/projen-constructs.Component">Component</a>[]
- *Default:* [{ component: Mise }, { component: Vitest, optionsProperty: { name: "vitestOptions", type: "...", docs: "..." } }]

Components to integrate into the project.

Each component will be instantiated during project construction and can be
configured via an optional options property in the generated interface.

---

##### `omitOptions`<sup>Optional</sup> <a name="omitOptions" id="@nikovirtala/projen-constructs.ProjectGeneratorOptions.property.omitOptions"></a>

```typescript
public readonly omitOptions: string[];
```

- *Type:* string[]

Property names to omit from the base options interface.

Use this to hide base class options that should not be configurable
in the generated project type.

---

### TypeDocConfiguration <a name="TypeDocConfiguration" id="@nikovirtala/projen-constructs.TypeDocConfiguration"></a>

TypeDoc configuration.

> [https://typedoc.org/options/](https://typedoc.org/options/)

#### Initializer <a name="Initializer" id="@nikovirtala/projen-constructs.TypeDocConfiguration.Initializer"></a>

```typescript
import { TypeDocConfiguration } from '@nikovirtala/projen-constructs'

const typeDocConfiguration: TypeDocConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.basePath">basePath</a></code> | <code>string</code> | Specify the base path for all urls. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.cacheBust">cacheBust</a></code> | <code>boolean</code> | Include the generation time in links to prevent browsers from using a cached version. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.categorizeByGroup">categorizeByGroup</a></code> | <code>boolean</code> | Specify the categories that will be used to group reflections. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.cleanOutputDir">cleanOutputDir</a></code> | <code>boolean</code> | Prevent TypeDoc from cleaning the output directory specified with --out. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.commentStyle">commentStyle</a></code> | <code><a href="#@nikovirtala/projen-constructs.CommentStyle">CommentStyle</a></code> | Specify the documentation mode TypeDoc should use. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.defaultCategory">defaultCategory</a></code> | <code>string</code> | Specify the default category for reflections without a category. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.defaultGroup">defaultGroup</a></code> | <code>string</code> | Specify the default group for reflections without a group. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.defaultVisibility">defaultVisibility</a></code> | <code><a href="#@nikovirtala/projen-constructs.Visibility">Visibility</a></code> | Specify the default visibility for members without a visibility tag. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.disableGit">disableGit</a></code> | <code>boolean</code> | Disables setting the source of reflections when documenting projects within a Git repository. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.disableSources">disableSources</a></code> | <code>boolean</code> | Disables automatically linking to source code. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.entryPoints">entryPoints</a></code> | <code>string[]</code> | Specifies the entry points to be documented by TypeDoc. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.entryPointStrategy">entryPointStrategy</a></code> | <code><a href="#@nikovirtala/projen-constructs.EntryPointStrategy">EntryPointStrategy</a></code> | Specifies the strategy to be used to convert entry points into documentation. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.exclude">exclude</a></code> | <code>string[]</code> | Define patterns to be excluded when expanding directories. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.excludeExternals">excludeExternals</a></code> | <code>boolean</code> | Prevent externally resolved symbols from being documented. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.excludeInternal">excludeInternal</a></code> | <code>boolean</code> | Prevent symbols that are not exported from being documented. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.excludePrivate">excludePrivate</a></code> | <code>boolean</code> | Prevent private members from being included in the generated documentation. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.excludeProtected">excludeProtected</a></code> | <code>boolean</code> | Prevent protected members from being included in the generated documentation. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.externalPattern">externalPattern</a></code> | <code>string[]</code> | Define patterns for files that should be considered external. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.externalSymbolLinkMappings">externalSymbolLinkMappings</a></code> | <code>{[ key: string ]: {[ key: string ]: string}}</code> | Define custom mappings for symbols in external packages. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.gitRemote">gitRemote</a></code> | <code>string</code> | Specify the git remote that should be used to link to source files. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.gitRevision">gitRevision</a></code> | <code>string</code> | Specify the git revision that should be used to link to source files. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.hideGenerator">hideGenerator</a></code> | <code>boolean</code> | Do not print the TypeDoc link at the end of the page. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.hideParameterTypesInTitle">hideParameterTypesInTitle</a></code> | <code>boolean</code> | Hide parameter types in the signature. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.includes">includes</a></code> | <code>string</code> | Specify the location to look for included documents. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.intentionallyNotExported">intentionallyNotExported</a></code> | <code>string[]</code> | A list of types that should not produce warnings when not being exported. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.json">json</a></code> | <code>string</code> | Specify the location the documentation should be written to. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.logLevel">logLevel</a></code> | <code><a href="#@nikovirtala/projen-constructs.LogLevel">LogLevel</a></code> | Specify the logger that should be used. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.media">media</a></code> | <code>string</code> | Specify the location with media files that should be copied to the output directory. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.name">name</a></code> | <code>string</code> | Set the name of the project that will be used in the header of the template. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.out">out</a></code> | <code>string</code> | Specifies the output directory the documentation should be written to. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.packageJson">packageJson</a></code> | <code>string</code> | Specify the package.json file that should be used to determine the package name. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.readme">readme</a></code> | <code>string</code> | Specify the readme file that should be displayed on the index page. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.requiredToBeDocumented">requiredToBeDocumented</a></code> | <code>string[]</code> | Specify the type of reflections that must be documented. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.searchCategoryBoosts">searchCategoryBoosts</a></code> | <code>{[ key: string ]: number}</code> | Specify the search category boosts. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.searchGroupBoosts">searchGroupBoosts</a></code> | <code>{[ key: string ]: number}</code> | Specify the search group boosts. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.searchInComments">searchInComments</a></code> | <code>boolean</code> | If set, the search index will also include comments. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.searchInDocuments">searchInDocuments</a></code> | <code>boolean</code> | If set, the search index will also include documents. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.sort">sort</a></code> | <code>string[]</code> | Specify the sort strategy for documented values. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.sortEntryPoints">sortEntryPoints</a></code> | <code>boolean</code> | Specify the sort strategy for static and instance members. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.sourceLinkTemplate">sourceLinkTemplate</a></code> | <code>string</code> | Specify a link template to be used when generating source urls. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.theme">theme</a></code> | <code>string</code> | Specify a theme name to use. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.treatValidationWarningsAsErrors">treatValidationWarningsAsErrors</a></code> | <code>boolean</code> | If set, validation warnings will be treated as errors. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.treatWarningsAsErrors">treatWarningsAsErrors</a></code> | <code>boolean</code> | If set, warnings will be treated as errors. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.tsBuildInfo">tsBuildInfo</a></code> | <code>string</code> | Specify the location and filename a .tsbuildinfo file should be written to. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.tsconfig">tsconfig</a></code> | <code>string</code> | Specify a TypeScript config file that should be used to load TypeScript configuration. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration.property.validation">validation</a></code> | <code><a href="#@nikovirtala/projen-constructs.ValidationOptions">ValidationOptions</a></code> | Specify validation options. |

---

##### `basePath`<sup>Optional</sup> <a name="basePath" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.basePath"></a>

```typescript
public readonly basePath: string;
```

- *Type:* string

Specify the base path for all urls.

> [https://typedoc.org/documents/Options.Output.html#basepath](https://typedoc.org/documents/Options.Output.html#basepath)

---

##### `cacheBust`<sup>Optional</sup> <a name="cacheBust" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.cacheBust"></a>

```typescript
public readonly cacheBust: boolean;
```

- *Type:* boolean

Include the generation time in links to prevent browsers from using a cached version.

> [https://typedoc.org/documents/Options.Output.html#cachebust](https://typedoc.org/documents/Options.Output.html#cachebust)

---

##### `categorizeByGroup`<sup>Optional</sup> <a name="categorizeByGroup" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.categorizeByGroup"></a>

```typescript
public readonly categorizeByGroup: boolean;
```

- *Type:* boolean

Specify the categories that will be used to group reflections.

> [https://typedoc.org/documents/Options.Organization.html#categorizebygroup](https://typedoc.org/documents/Options.Organization.html#categorizebygroup)

---

##### `cleanOutputDir`<sup>Optional</sup> <a name="cleanOutputDir" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.cleanOutputDir"></a>

```typescript
public readonly cleanOutputDir: boolean;
```

- *Type:* boolean

Prevent TypeDoc from cleaning the output directory specified with --out.

> [https://typedoc.org/documents/Options.Output.html#cleanoutputdir](https://typedoc.org/documents/Options.Output.html#cleanoutputdir)

---

##### `commentStyle`<sup>Optional</sup> <a name="commentStyle" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.commentStyle"></a>

```typescript
public readonly commentStyle: CommentStyle;
```

- *Type:* <a href="#@nikovirtala/projen-constructs.CommentStyle">CommentStyle</a>

Specify the documentation mode TypeDoc should use.

> [https://typedoc.org/documents/Options.Comments.html#commentstyle](https://typedoc.org/documents/Options.Comments.html#commentstyle)

---

##### `defaultCategory`<sup>Optional</sup> <a name="defaultCategory" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.defaultCategory"></a>

```typescript
public readonly defaultCategory: string;
```

- *Type:* string

Specify the default category for reflections without a category.

> [https://typedoc.org/documents/Options.Organization.html#defaultcategory](https://typedoc.org/documents/Options.Organization.html#defaultcategory)

---

##### `defaultGroup`<sup>Optional</sup> <a name="defaultGroup" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.defaultGroup"></a>

```typescript
public readonly defaultGroup: string;
```

- *Type:* string

Specify the default group for reflections without a group.

> [https://typedoc.org/documents/Options.Organization.html#defaultgroup](https://typedoc.org/documents/Options.Organization.html#defaultgroup)

---

##### `defaultVisibility`<sup>Optional</sup> <a name="defaultVisibility" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.defaultVisibility"></a>

```typescript
public readonly defaultVisibility: Visibility;
```

- *Type:* <a href="#@nikovirtala/projen-constructs.Visibility">Visibility</a>

Specify the default visibility for members without a visibility tag.

> [https://typedoc.org/documents/Options.Comments.html#defaultvisibility](https://typedoc.org/documents/Options.Comments.html#defaultvisibility)

---

##### `disableGit`<sup>Optional</sup> <a name="disableGit" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.disableGit"></a>

```typescript
public readonly disableGit: boolean;
```

- *Type:* boolean

Disables setting the source of reflections when documenting projects within a Git repository.

> [https://typedoc.org/documents/Options.Comments.html#disablegit](https://typedoc.org/documents/Options.Comments.html#disablegit)

---

##### `disableSources`<sup>Optional</sup> <a name="disableSources" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.disableSources"></a>

```typescript
public readonly disableSources: boolean;
```

- *Type:* boolean

Disables automatically linking to source code.

> [https://typedoc.org/documents/Options.Comments.html#disablesources](https://typedoc.org/documents/Options.Comments.html#disablesources)

---

##### `entryPoints`<sup>Optional</sup> <a name="entryPoints" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.entryPoints"></a>

```typescript
public readonly entryPoints: string[];
```

- *Type:* string[]

Specifies the entry points to be documented by TypeDoc.

> [https://typedoc.org/documents/Options.Input.html#entrypoints](https://typedoc.org/documents/Options.Input.html#entrypoints)

---

##### `entryPointStrategy`<sup>Optional</sup> <a name="entryPointStrategy" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.entryPointStrategy"></a>

```typescript
public readonly entryPointStrategy: EntryPointStrategy;
```

- *Type:* <a href="#@nikovirtala/projen-constructs.EntryPointStrategy">EntryPointStrategy</a>

Specifies the strategy to be used to convert entry points into documentation.

> [https://typedoc.org/documents/Options.Input.html#entrypointstrategy](https://typedoc.org/documents/Options.Input.html#entrypointstrategy)

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

Define patterns to be excluded when expanding directories.

> [https://typedoc.org/documents/Options.Input.html#exclude](https://typedoc.org/documents/Options.Input.html#exclude)

---

##### `excludeExternals`<sup>Optional</sup> <a name="excludeExternals" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.excludeExternals"></a>

```typescript
public readonly excludeExternals: boolean;
```

- *Type:* boolean

Prevent externally resolved symbols from being documented.

> [https://typedoc.org/documents/Options.Input.html#excludeexternals](https://typedoc.org/documents/Options.Input.html#excludeexternals)

---

##### `excludeInternal`<sup>Optional</sup> <a name="excludeInternal" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.excludeInternal"></a>

```typescript
public readonly excludeInternal: boolean;
```

- *Type:* boolean

Prevent symbols that are not exported from being documented.

> [https://typedoc.org/documents/Options.Input.html#excludeinternal](https://typedoc.org/documents/Options.Input.html#excludeinternal)

---

##### `excludePrivate`<sup>Optional</sup> <a name="excludePrivate" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.excludePrivate"></a>

```typescript
public readonly excludePrivate: boolean;
```

- *Type:* boolean

Prevent private members from being included in the generated documentation.

> [https://typedoc.org/documents/Options.Input.html#excludeprivate](https://typedoc.org/documents/Options.Input.html#excludeprivate)

---

##### `excludeProtected`<sup>Optional</sup> <a name="excludeProtected" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.excludeProtected"></a>

```typescript
public readonly excludeProtected: boolean;
```

- *Type:* boolean

Prevent protected members from being included in the generated documentation.

> [https://typedoc.org/documents/Options.Input.html#excludeprotected](https://typedoc.org/documents/Options.Input.html#excludeprotected)

---

##### `externalPattern`<sup>Optional</sup> <a name="externalPattern" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.externalPattern"></a>

```typescript
public readonly externalPattern: string[];
```

- *Type:* string[]

Define patterns for files that should be considered external.

> [https://typedoc.org/documents/Options.Input.html#externalpattern](https://typedoc.org/documents/Options.Input.html#externalpattern)

---

##### `externalSymbolLinkMappings`<sup>Optional</sup> <a name="externalSymbolLinkMappings" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.externalSymbolLinkMappings"></a>

```typescript
public readonly externalSymbolLinkMappings: {[ key: string ]: {[ key: string ]: string}};
```

- *Type:* {[ key: string ]: {[ key: string ]: string}}

Define custom mappings for symbols in external packages.

> [https://typedoc.org/documents/Options.Comments.html#externalsymbollinkmappings](https://typedoc.org/documents/Options.Comments.html#externalsymbollinkmappings)

---

##### `gitRemote`<sup>Optional</sup> <a name="gitRemote" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.gitRemote"></a>

```typescript
public readonly gitRemote: string;
```

- *Type:* string

Specify the git remote that should be used to link to source files.

> [https://typedoc.org/documents/Options.Comments.html#gitremote](https://typedoc.org/documents/Options.Comments.html#gitremote)

---

##### `gitRevision`<sup>Optional</sup> <a name="gitRevision" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.gitRevision"></a>

```typescript
public readonly gitRevision: string;
```

- *Type:* string

Specify the git revision that should be used to link to source files.

> [https://typedoc.org/documents/Options.Comments.html#gitrevision](https://typedoc.org/documents/Options.Comments.html#gitrevision)

---

##### `hideGenerator`<sup>Optional</sup> <a name="hideGenerator" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.hideGenerator"></a>

```typescript
public readonly hideGenerator: boolean;
```

- *Type:* boolean

Do not print the TypeDoc link at the end of the page.

> [https://typedoc.org/documents/Options.Output.html#hidegenerator](https://typedoc.org/documents/Options.Output.html#hidegenerator)

---

##### `hideParameterTypesInTitle`<sup>Optional</sup> <a name="hideParameterTypesInTitle" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.hideParameterTypesInTitle"></a>

```typescript
public readonly hideParameterTypesInTitle: boolean;
```

- *Type:* boolean

Hide parameter types in the signature.

> [https://typedoc.org/documents/Options.Output.html#hideparametertypesintitle](https://typedoc.org/documents/Options.Output.html#hideparametertypesintitle)

---

##### `includes`<sup>Optional</sup> <a name="includes" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.includes"></a>

```typescript
public readonly includes: string;
```

- *Type:* string

Specify the location to look for included documents.

> [https://typedoc.org/documents/Options.Output.html#includes](https://typedoc.org/documents/Options.Output.html#includes)

---

##### `intentionallyNotExported`<sup>Optional</sup> <a name="intentionallyNotExported" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.intentionallyNotExported"></a>

```typescript
public readonly intentionallyNotExported: string[];
```

- *Type:* string[]

A list of types that should not produce warnings when not being exported.

> [https://typedoc.org/documents/Options.Validation.html#intentionallynotexported](https://typedoc.org/documents/Options.Validation.html#intentionallynotexported)

---

##### `json`<sup>Optional</sup> <a name="json" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.json"></a>

```typescript
public readonly json: string;
```

- *Type:* string

Specify the location the documentation should be written to.

> [https://typedoc.org/documents/Options.Output.html#json](https://typedoc.org/documents/Options.Output.html#json)

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.logLevel"></a>

```typescript
public readonly logLevel: LogLevel;
```

- *Type:* <a href="#@nikovirtala/projen-constructs.LogLevel">LogLevel</a>

Specify the logger that should be used.

> [https://typedoc.org/documents/Options.Other.html#loglevel](https://typedoc.org/documents/Options.Other.html#loglevel)

---

##### `media`<sup>Optional</sup> <a name="media" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.media"></a>

```typescript
public readonly media: string;
```

- *Type:* string

Specify the location with media files that should be copied to the output directory.

> [https://typedoc.org/documents/Options.Output.html#media](https://typedoc.org/documents/Options.Output.html#media)

---

##### `name`<sup>Optional</sup> <a name="name" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Set the name of the project that will be used in the header of the template.

> [https://typedoc.org/documents/Options.Output.html#name](https://typedoc.org/documents/Options.Output.html#name)

---

##### `out`<sup>Optional</sup> <a name="out" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.out"></a>

```typescript
public readonly out: string;
```

- *Type:* string

Specifies the output directory the documentation should be written to.

> [https://typedoc.org/documents/Options.Output.html#out](https://typedoc.org/documents/Options.Output.html#out)

---

##### `packageJson`<sup>Optional</sup> <a name="packageJson" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.packageJson"></a>

```typescript
public readonly packageJson: string;
```

- *Type:* string

Specify the package.json file that should be used to determine the package name.

> [https://typedoc.org/documents/Options.Input.html#packagejson](https://typedoc.org/documents/Options.Input.html#packagejson)

---

##### `readme`<sup>Optional</sup> <a name="readme" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.readme"></a>

```typescript
public readonly readme: string;
```

- *Type:* string

Specify the readme file that should be displayed on the index page.

> [https://typedoc.org/documents/Options.Input.html#readme](https://typedoc.org/documents/Options.Input.html#readme)

---

##### `requiredToBeDocumented`<sup>Optional</sup> <a name="requiredToBeDocumented" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.requiredToBeDocumented"></a>

```typescript
public readonly requiredToBeDocumented: string[];
```

- *Type:* string[]

Specify the type of reflections that must be documented.

> [https://typedoc.org/documents/Options.Validation.html#requiredtobedocumented](https://typedoc.org/documents/Options.Validation.html#requiredtobedocumented)

---

##### `searchCategoryBoosts`<sup>Optional</sup> <a name="searchCategoryBoosts" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.searchCategoryBoosts"></a>

```typescript
public readonly searchCategoryBoosts: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

Specify the search category boosts.

> [https://typedoc.org/documents/Options.Organization.html#searchcategoryboosts](https://typedoc.org/documents/Options.Organization.html#searchcategoryboosts)

---

##### `searchGroupBoosts`<sup>Optional</sup> <a name="searchGroupBoosts" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.searchGroupBoosts"></a>

```typescript
public readonly searchGroupBoosts: {[ key: string ]: number};
```

- *Type:* {[ key: string ]: number}

Specify the search group boosts.

> [https://typedoc.org/documents/Options.Organization.html#searchgroupboosts](https://typedoc.org/documents/Options.Organization.html#searchgroupboosts)

---

##### `searchInComments`<sup>Optional</sup> <a name="searchInComments" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.searchInComments"></a>

```typescript
public readonly searchInComments: boolean;
```

- *Type:* boolean

If set, the search index will also include comments.

> [https://typedoc.org/documents/Options.Output.html#searchincomments](https://typedoc.org/documents/Options.Output.html#searchincomments)

---

##### `searchInDocuments`<sup>Optional</sup> <a name="searchInDocuments" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.searchInDocuments"></a>

```typescript
public readonly searchInDocuments: boolean;
```

- *Type:* boolean

If set, the search index will also include documents.

> [https://typedoc.org/documents/Options.Output.html#searchindocuments](https://typedoc.org/documents/Options.Output.html#searchindocuments)

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.sort"></a>

```typescript
public readonly sort: string[];
```

- *Type:* string[]

Specify the sort strategy for documented values.

> [https://typedoc.org/documents/Options.Organization.html#sort](https://typedoc.org/documents/Options.Organization.html#sort)

---

##### `sortEntryPoints`<sup>Optional</sup> <a name="sortEntryPoints" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.sortEntryPoints"></a>

```typescript
public readonly sortEntryPoints: boolean;
```

- *Type:* boolean

Specify the sort strategy for static and instance members.

> [https://typedoc.org/documents/Options.Organization.html#sortentrypoints](https://typedoc.org/documents/Options.Organization.html#sortentrypoints)

---

##### `sourceLinkTemplate`<sup>Optional</sup> <a name="sourceLinkTemplate" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.sourceLinkTemplate"></a>

```typescript
public readonly sourceLinkTemplate: string;
```

- *Type:* string

Specify a link template to be used when generating source urls.

> [https://typedoc.org/documents/Options.Input.html#sourcelinktemplate](https://typedoc.org/documents/Options.Input.html#sourcelinktemplate)

---

##### `theme`<sup>Optional</sup> <a name="theme" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.theme"></a>

```typescript
public readonly theme: string;
```

- *Type:* string

Specify a theme name to use.

> [https://typedoc.org/documents/Options.Output.html#theme](https://typedoc.org/documents/Options.Output.html#theme)

---

##### `treatValidationWarningsAsErrors`<sup>Optional</sup> <a name="treatValidationWarningsAsErrors" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.treatValidationWarningsAsErrors"></a>

```typescript
public readonly treatValidationWarningsAsErrors: boolean;
```

- *Type:* boolean

If set, validation warnings will be treated as errors.

> [https://typedoc.org/documents/Options.Validation.html#treatvalidationwarningsaserrors](https://typedoc.org/documents/Options.Validation.html#treatvalidationwarningsaserrors)

---

##### `treatWarningsAsErrors`<sup>Optional</sup> <a name="treatWarningsAsErrors" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.treatWarningsAsErrors"></a>

```typescript
public readonly treatWarningsAsErrors: boolean;
```

- *Type:* boolean

If set, warnings will be treated as errors.

> [https://typedoc.org/documents/Options.Validation.html#treatwarningsaserrors](https://typedoc.org/documents/Options.Validation.html#treatwarningsaserrors)

---

##### `tsBuildInfo`<sup>Optional</sup> <a name="tsBuildInfo" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.tsBuildInfo"></a>

```typescript
public readonly tsBuildInfo: string;
```

- *Type:* string

Specify the location and filename a .tsbuildinfo file should be written to.

> [https://typedoc.org/documents/Options.Input.html#tsbuildinfo](https://typedoc.org/documents/Options.Input.html#tsbuildinfo)

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.tsconfig"></a>

```typescript
public readonly tsconfig: string;
```

- *Type:* string

Specify a TypeScript config file that should be used to load TypeScript configuration.

> [https://typedoc.org/documents/Options.Input.html#tsconfig](https://typedoc.org/documents/Options.Input.html#tsconfig)

---

##### `validation`<sup>Optional</sup> <a name="validation" id="@nikovirtala/projen-constructs.TypeDocConfiguration.property.validation"></a>

```typescript
public readonly validation: ValidationOptions;
```

- *Type:* <a href="#@nikovirtala/projen-constructs.ValidationOptions">ValidationOptions</a>

Specify validation options.

> [https://typedoc.org/documents/Options.Validation.html](https://typedoc.org/documents/Options.Validation.html)

---

### TypeDocOptions <a name="TypeDocOptions" id="@nikovirtala/projen-constructs.TypeDocOptions"></a>

#### Initializer <a name="Initializer" id="@nikovirtala/projen-constructs.TypeDocOptions.Initializer"></a>

```typescript
import { TypeDocOptions } from '@nikovirtala/projen-constructs'

const typeDocOptions: TypeDocOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocOptions.property.typeDocConfig">typeDocConfig</a></code> | <code><a href="#@nikovirtala/projen-constructs.TypeDocConfiguration">TypeDocConfiguration</a></code> | Full TypeDoc configuration. |
| <code><a href="#@nikovirtala/projen-constructs.TypeDocOptions.property.version">version</a></code> | <code>string</code> | Version of TypeDoc to use. |

---

##### `typeDocConfig`<sup>Optional</sup> <a name="typeDocConfig" id="@nikovirtala/projen-constructs.TypeDocOptions.property.typeDocConfig"></a>

```typescript
public readonly typeDocConfig: TypeDocConfiguration;
```

- *Type:* <a href="#@nikovirtala/projen-constructs.TypeDocConfiguration">TypeDocConfiguration</a>

Full TypeDoc configuration.

This configuration will be merged with the default configuration

---

##### `version`<sup>Optional</sup> <a name="version" id="@nikovirtala/projen-constructs.TypeDocOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string
- *Default:* "^0.28"

Version of TypeDoc to use.

---

### TypeScriptProjectOptions <a name="TypeScriptProjectOptions" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions"></a>

TypeScriptProjectOptions.

#### Initializer <a name="Initializer" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.Initializer"></a>

```typescript
import { TypeScriptProjectOptions } from '@nikovirtala/projen-constructs'

const typeScriptProjectOptions: TypeScriptProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.addPackageManagerToDevEngines">addPackageManagerToDevEngines</a></code> | <code>boolean</code> | Automatically add the resolved `packageManager` to `devEngines.packageManager` in `package.json`, setting `onFail` to `ignore`. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.allowScripts">allowScripts</a></code> | <code>string[]</code> | List of dependency (package) names that are allowed to run lifecycle install scripts (`preinstall`, `install`, `postinstall`, `prepare`) during dependency installation. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.auditDeps">auditDeps</a></code> | <code>boolean</code> | Run security audit on dependencies. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.auditDepsOptions">auditDepsOptions</a></code> | <code>projen.javascript.AuditOptions</code> | Security audit options. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configured). |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.biome">biome</a></code> | <code>boolean</code> | Setup Biome. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.biomeOptions">biomeOptions</a></code> | <code>projen.javascript.BiomeOptions</code> | Biome options. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.bumpPackage">bumpPackage</a></code> | <code>string</code> | The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.bunVersion">bunVersion</a></code> | <code>string</code> | The version of Bun to use if using Bun as a package manager. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v5 By default, OIDC auth is used. Alternatively a token can be provided via `codeCovTokenSecret`. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.deleteOrphanedLockFiles">deleteOrphanedLockFiles</a></code> | <code>boolean</code> | Automatically delete lockfiles from package managers that are not the active one. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.devEngines">devEngines</a></code> | <code>projen.javascript.DevEngines</code> | Configure the `devEngines` field in `package.json`. The `devEngines.packageManager` field is automatically populated based on the resolved `packageManager` value. Any fields provided here are merged with the auto-populated `packageManager` entry. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a development tsconfig file. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). Set to an empty string to not include `main` in your package.json. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.homebrew">homebrew</a></code> | <code>boolean</code> | Enable Homebrew component. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.homebrewOptions">homebrewOptions</a></code> | <code><a href="#@nikovirtala/projen-constructs.HomebrewOptions">HomebrewOptions</a></code> | Homebrew configuration. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | The maximum node version supported by this package. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.mise">mise</a></code> | <code>boolean</code> | Enable Mise component. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.miseOptions">miseOptions</a></code> | <code><a href="#@nikovirtala/projen-constructs.MiseOptions">MiseOptions</a></code> | Mise configuration. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.nextVersionCommand">nextVersionCommand</a></code> | <code>string</code> | A shell command to control the next version to release. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.npmTrustedPublishing">npmTrustedPublishing</a></code> | <code>boolean</code> | Use trusted publishing for publishing to npmjs.com Needs to be pre-configured on npm.js to work. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. Relative to this directory, all files are synthesized. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.pnpmOptions">pnpmOptions</a></code> | <code>projen.javascript.PnpmOptions</code> | Options for pnpm. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.projectTree">projectTree</a></code> | <code>boolean</code> | Generate a project tree file (`.projen/tree.json`) that shows all components and their relationships. Useful for understanding your project structure and debugging. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.releaseEnvironment">releaseEnvironment</a></code> | <code>string</code> | The GitHub Actions environment used for the release. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.releaseWorkflowEnv">releaseWorkflowEnv</a></code> | <code>{[ key: string ]: string}</code> | Build environment variables for release workflows. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.runner">runner</a></code> | <code>projen.typescript.TypeScriptRunner</code> | The TypeScript runner to use for executing TypeScript files. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom TSConfig. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name (and path) of the development tsconfig file. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with commit-and-tag-version package. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.vitest">vitest</a></code> | <code>boolean</code> | Enable Vitest component. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.vitestOptions">vitestOptions</a></code> | <code><a href="#@nikovirtala/projen-constructs.VitestOptions">VitestOptions</a></code> | Vitest configuration. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version used in GitHub Actions workflows. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |

---

##### `name`<sup>Required</sup> <a name="name" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `addPackageManagerToDevEngines`<sup>Optional</sup> <a name="addPackageManagerToDevEngines" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.addPackageManagerToDevEngines"></a>

```typescript
public readonly addPackageManagerToDevEngines: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add the resolved `packageManager` to `devEngines.packageManager` in `package.json`, setting `onFail` to `ignore`.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `allowScripts`<sup>Optional</sup> <a name="allowScripts" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.allowScripts"></a>

```typescript
public readonly allowScripts: string[];
```

- *Type:* string[]
- *Default:* all install scripts are allowed to run (package manager default)

List of dependency (package) names that are allowed to run lifecycle install scripts (`preinstall`, `install`, `postinstall`, `prepare`) during dependency installation.

These scripts can execute arbitrary code, making them a common
supply-chain attack vector. Package managers are moving toward
blocking them by default and requiring an explicit allowlist.
Configuring `allowScripts` sets up that allowlist so scripts only run
for the packages you have explicitly reviewed and trust.

Support for this setting depends on the configured `packageManager`:

- `NPM`: written to the native `allowScripts` field in `package.json`
  (requires npm >= 11.16; see https://docs.npmjs.com/cli/v11/commands/npm-approve-scripts).
- `BUN`: written to the native `trustedDependencies` field in
  `package.json` (see https://bun.com/docs/pm/lifecycle).
- `PNPM`: written to the `onlyBuiltDependencies` setting in
  `pnpm-workspace.yaml` (see https://pnpm.io/settings#onlybuiltdependencies).
- `YARN2`, `YARN_BERRY`: written to the native
  `dependenciesMeta.<pkg>.built` allowlist in `package.json`, combined
  with `enableScripts: false` in `.yarnrc.yml` (see
  https://yarnpkg.com/features/security#postinstalls). If you set
  `yarnBerryOptions.yarnRcOptions.enableScripts` explicitly, that value
  is respected instead of being overridden.
- `YARN`, `YARN_CLASSIC`: not supported. Yarn Classic has no native
  mechanism to allowlist install scripts for specific dependencies.
  Setting this option with one of these package managers throws an
  error at synthesis time.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `auditDeps`<sup>Optional</sup> <a name="auditDeps" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.auditDeps"></a>

```typescript
public readonly auditDeps: boolean;
```

- *Type:* boolean
- *Default:* false

Run security audit on dependencies.

When enabled, creates an "audit" task that checks for known security vulnerabilities
in dependencies. By default, runs during every build and checks for "high" severity
vulnerabilities or above in all dependencies (including dev dependencies).

---

##### `auditDepsOptions`<sup>Optional</sup> <a name="auditDepsOptions" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.auditDepsOptions"></a>

```typescript
public readonly auditDepsOptions: AuditOptions;
```

- *Type:* projen.javascript.AuditOptions
- *Default:* default options

Security audit options.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configured).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `biome`<sup>Optional</sup> <a name="biome" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.biome"></a>

```typescript
public readonly biome: boolean;
```

- *Type:* boolean
- *Default:* false

Setup Biome.

---

##### `biomeOptions`<sup>Optional</sup> <a name="biomeOptions" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.biomeOptions"></a>

```typescript
public readonly biomeOptions: BiomeOptions;
```

- *Type:* projen.javascript.BiomeOptions
- *Default:* default options

Biome options.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### `bumpPackage`<sup>Optional</sup> <a name="bumpPackage" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.bumpPackage"></a>

```typescript
public readonly bumpPackage: string;
```

- *Type:* string
- *Default:* A recent version of "commit-and-tag-version"

The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string.

This can be any compatible package version, including the deprecated `standard-version@9`.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `pnpm add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `pnpm add` or `npm i` (e.g. `express@^2`) and
this will be what your `package.json` will eventually include.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `bunVersion`<sup>Optional</sup> <a name="bunVersion" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.bunVersion"></a>

```typescript
public readonly bunVersion: string;
```

- *Type:* string
- *Default:* "latest"

The version of Bun to use if using Bun as a package manager.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v5 By default, OIDC auth is used. Alternatively a token can be provided via `codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* OIDC auth is used

Define the secret name for a specified https://codecov.io/ token.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

This value is only used if the selected license text contains the
`$copyright_owner` placeholder. For example, it has no effect on the
MPL-2.0 license text.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

This value is only used if the selected license text contains the
`$copyright_period` placeholder. For example, it has no effect on the
MPL-2.0 license text.

---

##### `defaultReleaseBranch`<sup>Optional</sup> <a name="defaultReleaseBranch" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `deleteOrphanedLockFiles`<sup>Optional</sup> <a name="deleteOrphanedLockFiles" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.deleteOrphanedLockFiles"></a>

```typescript
public readonly deleteOrphanedLockFiles: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically delete lockfiles from package managers that are not the active one.

Only triggered when the lockfile for the configured package
manager already exists.

This is useful when migrating between package managers to avoid conflicts.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `pnpm add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `pnpm add` or `npm i` (e.g. `express@^2`) and
this will be what your `package.json` will eventually include.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* `true` for root projects, `false` for subprojects

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `description`<sup>Optional</sup> <a name="description" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `pnpm add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `pnpm add` or `npm i` (e.g. `express@^2`) and
this will be what your `package.json` will eventually include.

---

##### `devEngines`<sup>Optional</sup> <a name="devEngines" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.devEngines"></a>

```typescript
public readonly devEngines: DevEngines;
```

- *Type:* projen.javascript.DevEngines

Configure the `devEngines` field in `package.json`. The `devEngines.packageManager` field is automatically populated based on the resolved `packageManager` value. Any fields provided here are merged with the auto-populated `packageManager` entry.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a development tsconfig file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`). Set to an empty string to not include `main` in your package.json.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `github`<sup>Optional</sup> <a name="github" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### `homebrew`<sup>Optional</sup> <a name="homebrew" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.homebrew"></a>

```typescript
public readonly homebrew: boolean;
```

- *Type:* boolean
- *Default:* true

Enable Homebrew component.

---

##### `homebrewOptions`<sup>Optional</sup> <a name="homebrewOptions" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.homebrewOptions"></a>

```typescript
public readonly homebrewOptions: HomebrewOptions;
```

- *Type:* <a href="#@nikovirtala/projen-constructs.HomebrewOptions">HomebrewOptions</a>
- *Default:* default Homebrew configuration

Homebrew configuration.

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `license`<sup>Optional</sup> <a name="license" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no maximum version is enforced

The maximum node version supported by this package.

Most projects should not use this option.
The value indicates that the package is incompatible with any newer versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option.
Consider this option only if your package is known to not function with newer versions of node.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no minimum version is enforced

The minimum node version required by this package to function.

Most projects should not use this option.
The value indicates that the package is incompatible with any older versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option, even if your package is incompatible with EOL versions of node.
Consider this option only if your package depends on a specific feature, that is not available in other LTS versions.
Setting this option has very high impact on the consumers of your package,
as package managers will actively prevent usage with node versions you have marked as incompatible.

To change the node version of your CI/CD workflows, use `workflowNodeVersion`.

---

##### `mise`<sup>Optional</sup> <a name="mise" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.mise"></a>

```typescript
public readonly mise: boolean;
```

- *Type:* boolean
- *Default:* true

Enable Mise component.

---

##### `miseOptions`<sup>Optional</sup> <a name="miseOptions" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.miseOptions"></a>

```typescript
public readonly miseOptions: MiseOptions;
```

- *Type:* <a href="#@nikovirtala/projen-constructs.MiseOptions">MiseOptions</a>
- *Default:* default Mise configuration

Mise configuration.

---

##### `nextVersionCommand`<sup>Optional</sup> <a name="nextVersionCommand" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.nextVersionCommand"></a>

```typescript
public readonly nextVersionCommand: string;
```

- *Type:* string
- *Default:* The next version will be determined based on the commit history and project settings.

A shell command to control the next version to release.

If present, this shell command will be run before the bump is executed, and
it determines what version to release. It will be executed in the following
environment:

- Working directory: the project directory.
- `$VERSION`: the current version. Looks like `1.2.3`.
- `$LATEST_TAG`: the most recent tag. Looks like `prefix-v1.2.3`, or may be unset.
- `$SUGGESTED_BUMP`: the suggested bump action based on commits. One of `major|minor|patch|none`.

The command should print one of the following to `stdout`:

- Nothing: the next version number will be determined based on commit history.
- `x.y.z`: the next version number will be `x.y.z`.
- `major|minor|patch`: the next version number will be the current version number
  with the indicated component bumped.

This setting cannot be specified together with `minMajorVersion`; the invoked
script can be used to achieve the effects of `minMajorVersion`.

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.npmProvenance"></a>

```typescript
public readonly npmProvenance: boolean;
```

- *Type:* boolean
- *Default:* true for public packages, false otherwise

Should provenance statements be generated when the package is published.

A supported package manager is required to publish a package with npm provenance statements and
you will need to use a supported CI/CD provider.

Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
which is using npm internally and supports provenance statements independently of the package manager used.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `npmTrustedPublishing`<sup>Optional</sup> <a name="npmTrustedPublishing" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.npmTrustedPublishing"></a>

```typescript
public readonly npmTrustedPublishing: boolean;
```

- *Type:* boolean
- *Default:* false

Use trusted publishing for publishing to npmjs.com Needs to be pre-configured on npm.js to work.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project. Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `package`<sup>Optional</sup> <a name="package" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* Detected from the calling process or `YARN_CLASSIC` if detection fails.

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `pnpmOptions`<sup>Optional</sup> <a name="pnpmOptions" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.pnpmOptions"></a>

```typescript
public readonly pnpmOptions: PnpmOptions;
```

- *Type:* projen.javascript.PnpmOptions
- *Default:* all default options

Options for pnpm.

---

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "10.33.0"

The version of PNPM to use if using PNPM as a package manager.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `projectTree`<sup>Optional</sup> <a name="projectTree" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.projectTree"></a>

```typescript
public readonly projectTree: boolean;
```

- *Type:* boolean
- *Default:* false

Generate a project tree file (`.projen/tree.json`) that shows all components and their relationships. Useful for understanding your project structure and debugging.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `release`<sup>Optional</sup> <a name="release" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: projen.release.BranchOptions}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### `releaseEnvironment`<sup>Optional</sup> <a name="releaseEnvironment" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.releaseEnvironment"></a>

```typescript
public readonly releaseEnvironment: string;
```

- *Type:* string
- *Default:* no environment used, unless set at the artifact level

The GitHub Actions environment used for the release.

This can be used to add an explicit approval step to the release
or limit who can initiate a release through environment protection rules.

When multiple artifacts are released, the environment can be overwritten
on a per artifact basis.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* string
- *Default:* "v"

Automatically add the given prefix to release tags.

Useful if you are releasing on multiple branches with overlapping version numbers.
Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowEnv`<sup>Optional</sup> <a name="releaseWorkflowEnv" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.releaseWorkflowEnv"></a>

```typescript
public readonly releaseWorkflowEnv: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Build environment variables for release workflows.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `runner`<sup>Optional</sup> <a name="runner" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.runner"></a>

```typescript
public readonly runner: TypeScriptRunner;
```

- *Type:* projen.typescript.TypeScriptRunner
- *Default:* TypeScriptRunner.tsNode()

The TypeScript runner to use for executing TypeScript files.

This is a project-level setting that components (e.g. projenrc) will
use as their default runner.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `stale`<sup>Optional</sup> <a name="stale" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string
- *Default:* "test"

Jest tests directory.

Tests files should be named `xxx.test.ts`.
If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "{testdir}/tsconfig.json"

The name (and path) of the development tsconfig file.

By default this lives inside the test directory (e.g. `test/tsconfig.json`)
so that the TypeScript language service resolves it as the nearest config
for test files.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with commit-and-tag-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `vitest`<sup>Optional</sup> <a name="vitest" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.vitest"></a>

```typescript
public readonly vitest: boolean;
```

- *Type:* boolean
- *Default:* true

Enable Vitest component.

---

##### `vitestOptions`<sup>Optional</sup> <a name="vitestOptions" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.vitestOptions"></a>

```typescript
public readonly vitestOptions: VitestOptions;
```

- *Type:* <a href="#@nikovirtala/projen-constructs.VitestOptions">VitestOptions</a>
- *Default:* default Vitest configuration

Vitest configuration.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* default GitHub Actions user

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* `minNodeVersion` if set, otherwise `lts/*`.

The node version used in GitHub Actions workflows.

Always use this option if your GitHub Actions workflows require a specific to run.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="@nikovirtala/projen-constructs.TypeScriptProjectOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

### ValidationOptions <a name="ValidationOptions" id="@nikovirtala/projen-constructs.ValidationOptions"></a>

Validation options.

> [https://typedoc.org/documents/Options.Validation.html](https://typedoc.org/documents/Options.Validation.html)

#### Initializer <a name="Initializer" id="@nikovirtala/projen-constructs.ValidationOptions.Initializer"></a>

```typescript
import { ValidationOptions } from '@nikovirtala/projen-constructs'

const validationOptions: ValidationOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.ValidationOptions.property.invalidLink">invalidLink</a></code> | <code>boolean</code> | If set, TypeDoc will produce warnings about \@link tags which will produce broken links. |
| <code><a href="#@nikovirtala/projen-constructs.ValidationOptions.property.notDocumented">notDocumented</a></code> | <code>boolean</code> | If set, TypeDoc will produce warnings when an exported symbol is not documented. |
| <code><a href="#@nikovirtala/projen-constructs.ValidationOptions.property.notExported">notExported</a></code> | <code>boolean</code> | If set, TypeDoc will produce warnings when a symbol is referenced by the documentation. |

---

##### `invalidLink`<sup>Optional</sup> <a name="invalidLink" id="@nikovirtala/projen-constructs.ValidationOptions.property.invalidLink"></a>

```typescript
public readonly invalidLink: boolean;
```

- *Type:* boolean

If set, TypeDoc will produce warnings about \@link tags which will produce broken links.

---

##### `notDocumented`<sup>Optional</sup> <a name="notDocumented" id="@nikovirtala/projen-constructs.ValidationOptions.property.notDocumented"></a>

```typescript
public readonly notDocumented: boolean;
```

- *Type:* boolean

If set, TypeDoc will produce warnings when an exported symbol is not documented.

---

##### `notExported`<sup>Optional</sup> <a name="notExported" id="@nikovirtala/projen-constructs.ValidationOptions.property.notExported"></a>

```typescript
public readonly notExported: boolean;
```

- *Type:* boolean

If set, TypeDoc will produce warnings when a symbol is referenced by the documentation.

---

### VitestConfigOptions <a name="VitestConfigOptions" id="@nikovirtala/projen-constructs.VitestConfigOptions"></a>

Vitest Config.

> [https://vitest.dev/config/](https://vitest.dev/config/)

#### Initializer <a name="Initializer" id="@nikovirtala/projen-constructs.VitestConfigOptions.Initializer"></a>

```typescript
import { VitestConfigOptions } from '@nikovirtala/projen-constructs'

const vitestConfigOptions: VitestConfigOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.VitestConfigOptions.property.bail">bail</a></code> | <code>number</code> | Stop running tests after certain number of failures. |
| <code><a href="#@nikovirtala/projen-constructs.VitestConfigOptions.property.coverageDirectory">coverageDirectory</a></code> | <code>string</code> | Coverage output directory. |
| <code><a href="#@nikovirtala/projen-constructs.VitestConfigOptions.property.coverageEnabled">coverageEnabled</a></code> | <code>boolean</code> | Coverage enabled. |
| <code><a href="#@nikovirtala/projen-constructs.VitestConfigOptions.property.coverageProvider">coverageProvider</a></code> | <code><a href="#@nikovirtala/projen-constructs.CoverageProvider">CoverageProvider</a></code> | Coverage provider type. |
| <code><a href="#@nikovirtala/projen-constructs.VitestConfigOptions.property.coverageReporters">coverageReporters</a></code> | <code><a href="#@nikovirtala/projen-constructs.CoverageReporter">CoverageReporter</a>[]</code> | Coverage reporters. |
| <code><a href="#@nikovirtala/projen-constructs.VitestConfigOptions.property.environment">environment</a></code> | <code><a href="#@nikovirtala/projen-constructs.Environment">Environment</a></code> | The environment that will be used for testing. |
| <code><a href="#@nikovirtala/projen-constructs.VitestConfigOptions.property.exclude">exclude</a></code> | <code>string[]</code> | A list of glob patterns that should be excluded from your test files. |
| <code><a href="#@nikovirtala/projen-constructs.VitestConfigOptions.property.globals">globals</a></code> | <code>boolean</code> | Register apis globally. |
| <code><a href="#@nikovirtala/projen-constructs.VitestConfigOptions.property.include">include</a></code> | <code>string[]</code> | A list of glob patterns that match your test files. |
| <code><a href="#@nikovirtala/projen-constructs.VitestConfigOptions.property.isolate">isolate</a></code> | <code>boolean</code> | Run tests in an isolated environment. This option has no effect on vmThreads pool. |
| <code><a href="#@nikovirtala/projen-constructs.VitestConfigOptions.property.passWithNoTests">passWithNoTests</a></code> | <code>boolean</code> | Vitest will not fail, if no tests will be found. |
| <code><a href="#@nikovirtala/projen-constructs.VitestConfigOptions.property.pool">pool</a></code> | <code><a href="#@nikovirtala/projen-constructs.Pool">Pool</a></code> | Pool used to run tests in. |
| <code><a href="#@nikovirtala/projen-constructs.VitestConfigOptions.property.printConsoleTrace">printConsoleTrace</a></code> | <code>boolean</code> | Always print console traces when calling any console method. |
| <code><a href="#@nikovirtala/projen-constructs.VitestConfigOptions.property.slowTestThreshold">slowTestThreshold</a></code> | <code>number</code> | The number of milliseconds after which a test or suite is considered slow. |
| <code><a href="#@nikovirtala/projen-constructs.VitestConfigOptions.property.typecheckChecker">typecheckChecker</a></code> | <code>string</code> | Tool to use for type checking. |
| <code><a href="#@nikovirtala/projen-constructs.VitestConfigOptions.property.typecheckEnabled">typecheckEnabled</a></code> | <code>boolean</code> | Enable typechecking alongside your regular tests. |
| <code><a href="#@nikovirtala/projen-constructs.VitestConfigOptions.property.typecheckTsconfig">typecheckTsconfig</a></code> | <code>string</code> | Path to custom tsconfig, relative to the project root. |
| <code><a href="#@nikovirtala/projen-constructs.VitestConfigOptions.property.updateSnapshots">updateSnapshots</a></code> | <code>boolean</code> | Update snapshot files. |

---

##### `bail`<sup>Optional</sup> <a name="bail" id="@nikovirtala/projen-constructs.VitestConfigOptions.property.bail"></a>

```typescript
public readonly bail: number;
```

- *Type:* number
- *Default:* 0

Stop running tests after certain number of failures.

> [https://vitest.dev/config/#bail](https://vitest.dev/config/#bail)

---

##### `coverageDirectory`<sup>Optional</sup> <a name="coverageDirectory" id="@nikovirtala/projen-constructs.VitestConfigOptions.property.coverageDirectory"></a>

```typescript
public readonly coverageDirectory: string;
```

- *Type:* string
- *Default:* "coverage"

Coverage output directory.

---

##### `coverageEnabled`<sup>Optional</sup> <a name="coverageEnabled" id="@nikovirtala/projen-constructs.VitestConfigOptions.property.coverageEnabled"></a>

```typescript
public readonly coverageEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Coverage enabled.

> [https://vitest.dev/config/#coverage-enabled](https://vitest.dev/config/#coverage-enabled)

---

##### `coverageProvider`<sup>Optional</sup> <a name="coverageProvider" id="@nikovirtala/projen-constructs.VitestConfigOptions.property.coverageProvider"></a>

```typescript
public readonly coverageProvider: CoverageProvider;
```

- *Type:* <a href="#@nikovirtala/projen-constructs.CoverageProvider">CoverageProvider</a>
- *Default:* "v8"

Coverage provider type.

> [https://vitest.dev/config/#coverage-provider](https://vitest.dev/config/#coverage-provider)

---

##### `coverageReporters`<sup>Optional</sup> <a name="coverageReporters" id="@nikovirtala/projen-constructs.VitestConfigOptions.property.coverageReporters"></a>

```typescript
public readonly coverageReporters: CoverageReporter[];
```

- *Type:* <a href="#@nikovirtala/projen-constructs.CoverageReporter">CoverageReporter</a>[]
- *Default:* '["text", "lcov"]'

Coverage reporters.

> [https://vitest.dev/config/#coverage-reporter](https://vitest.dev/config/#coverage-reporter)

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@nikovirtala/projen-constructs.VitestConfigOptions.property.environment"></a>

```typescript
public readonly environment: Environment;
```

- *Type:* <a href="#@nikovirtala/projen-constructs.Environment">Environment</a>
- *Default:* "node"

The environment that will be used for testing.

> [https://vitest.dev/config/#environment](https://vitest.dev/config/#environment)

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@nikovirtala/projen-constructs.VitestConfigOptions.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]
- *Default:* Vitest's `configDefaults.exclude`

A list of glob patterns that should be excluded from your test files.

> [https://vitest.dev/config/#exclude](https://vitest.dev/config/#exclude)

---

##### `globals`<sup>Optional</sup> <a name="globals" id="@nikovirtala/projen-constructs.VitestConfigOptions.property.globals"></a>

```typescript
public readonly globals: boolean;
```

- *Type:* boolean
- *Default:* false

Register apis globally.

If you prefer to use the APIs globally like Jest, set to `true`.

> [https://vitest.dev/config/#globals](https://vitest.dev/config/#globals)

---

##### `include`<sup>Optional</sup> <a name="include" id="@nikovirtala/projen-constructs.VitestConfigOptions.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]
- *Default:* Vitest's `configDefaults.include`

A list of glob patterns that match your test files.

> [https://vitest.dev/config/#include](https://vitest.dev/config/#include)

---

##### `isolate`<sup>Optional</sup> <a name="isolate" id="@nikovirtala/projen-constructs.VitestConfigOptions.property.isolate"></a>

```typescript
public readonly isolate: boolean;
```

- *Type:* boolean
- *Default:* true

Run tests in an isolated environment. This option has no effect on vmThreads pool.

Disabling this option might improve performance if your code doesn't rely on side effects.

> [https://vitest.dev/config/#isolate](https://vitest.dev/config/#isolate)

---

##### `passWithNoTests`<sup>Optional</sup> <a name="passWithNoTests" id="@nikovirtala/projen-constructs.VitestConfigOptions.property.passWithNoTests"></a>

```typescript
public readonly passWithNoTests: boolean;
```

- *Type:* boolean
- *Default:* true

Vitest will not fail, if no tests will be found.

> [https://vitest.dev/config/#passwithnotests](https://vitest.dev/config/#passwithnotests)

---

##### `pool`<sup>Optional</sup> <a name="pool" id="@nikovirtala/projen-constructs.VitestConfigOptions.property.pool"></a>

```typescript
public readonly pool: Pool;
```

- *Type:* <a href="#@nikovirtala/projen-constructs.Pool">Pool</a>
- *Default:* "forks"

Pool used to run tests in.

> [https://vitest.dev/config/#pool](https://vitest.dev/config/#pool)

---

##### `printConsoleTrace`<sup>Optional</sup> <a name="printConsoleTrace" id="@nikovirtala/projen-constructs.VitestConfigOptions.property.printConsoleTrace"></a>

```typescript
public readonly printConsoleTrace: boolean;
```

- *Type:* boolean
- *Default:* true

Always print console traces when calling any console method.

> [https://vitest.dev/config/#consoletrace](https://vitest.dev/config/#consoletrace)

---

##### `slowTestThreshold`<sup>Optional</sup> <a name="slowTestThreshold" id="@nikovirtala/projen-constructs.VitestConfigOptions.property.slowTestThreshold"></a>

```typescript
public readonly slowTestThreshold: number;
```

- *Type:* number
- *Default:* 300

The number of milliseconds after which a test or suite is considered slow.

> [https://vitest.dev/config/#slowtestthreshold](https://vitest.dev/config/#slowtestthreshold)

---

##### `typecheckChecker`<sup>Optional</sup> <a name="typecheckChecker" id="@nikovirtala/projen-constructs.VitestConfigOptions.property.typecheckChecker"></a>

```typescript
public readonly typecheckChecker: string;
```

- *Type:* string
- *Default:* "tsc --noEmit"

Tool to use for type checking.

Checker should implement the same output format as `tsc`.

> [https://vitest.dev/config/#typecheck-checker](https://vitest.dev/config/#typecheck-checker)

---

##### `typecheckEnabled`<sup>Optional</sup> <a name="typecheckEnabled" id="@nikovirtala/projen-constructs.VitestConfigOptions.property.typecheckEnabled"></a>

```typescript
public readonly typecheckEnabled: boolean;
```

- *Type:* boolean
- *Default:* true (for TypeScript projects)

Enable typechecking alongside your regular tests.

> [https://vitest.dev/config/#typecheck-enabled](https://vitest.dev/config/#typecheck-enabled)

---

##### `typecheckTsconfig`<sup>Optional</sup> <a name="typecheckTsconfig" id="@nikovirtala/projen-constructs.VitestConfigOptions.property.typecheckTsconfig"></a>

```typescript
public readonly typecheckTsconfig: string;
```

- *Type:* string
- *Default:* the project's development tsconfig (e.g. "test/tsconfig.json")

Path to custom tsconfig, relative to the project root.

> [https://vitest.dev/config/#typecheck-tsconfig](https://vitest.dev/config/#typecheck-tsconfig)

---

##### `updateSnapshots`<sup>Optional</sup> <a name="updateSnapshots" id="@nikovirtala/projen-constructs.VitestConfigOptions.property.updateSnapshots"></a>

```typescript
public readonly updateSnapshots: boolean;
```

- *Type:* boolean
- *Default:* true

Update snapshot files.

This will update all changed snapshots and delete obsolete ones.

> [https://vitest.dev/guide/snapshot.html#updating-snapshots](https://vitest.dev/guide/snapshot.html#updating-snapshots)

---

### VitestOptions <a name="VitestOptions" id="@nikovirtala/projen-constructs.VitestOptions"></a>

#### Initializer <a name="Initializer" id="@nikovirtala/projen-constructs.VitestOptions.Initializer"></a>

```typescript
import { VitestOptions } from '@nikovirtala/projen-constructs'

const vitestOptions: VitestOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.VitestOptions.property.config">config</a></code> | <code><a href="#@nikovirtala/projen-constructs.VitestConfigOptions">VitestConfigOptions</a></code> | Initial config options. |
| <code><a href="#@nikovirtala/projen-constructs.VitestOptions.property.configFilePath">configFilePath</a></code> | <code>string</code> | Config file path. |
| <code><a href="#@nikovirtala/projen-constructs.VitestOptions.property.vitestVersion">vitestVersion</a></code> | <code>string</code> | Vitest version. |

---

##### `config`<sup>Optional</sup> <a name="config" id="@nikovirtala/projen-constructs.VitestOptions.property.config"></a>

```typescript
public readonly config: VitestConfigOptions;
```

- *Type:* <a href="#@nikovirtala/projen-constructs.VitestConfigOptions">VitestConfigOptions</a>

Initial config options.

---

##### `configFilePath`<sup>Optional</sup> <a name="configFilePath" id="@nikovirtala/projen-constructs.VitestOptions.property.configFilePath"></a>

```typescript
public readonly configFilePath: string;
```

- *Type:* string
- *Default:* "vitest.config.ts"

Config file path.

---

##### `vitestVersion`<sup>Optional</sup> <a name="vitestVersion" id="@nikovirtala/projen-constructs.VitestOptions.property.vitestVersion"></a>

```typescript
public readonly vitestVersion: string;
```

- *Type:* string
- *Default:* "^4"

Vitest version.

---



## Enums <a name="Enums" id="Enums"></a>

### CommentStyle <a name="CommentStyle" id="@nikovirtala/projen-constructs.CommentStyle"></a>

Specifies the documentation mode TypeDoc should use.

> [https://typedoc.org/documents/Options.Comments.html#commentstyle](https://typedoc.org/documents/Options.Comments.html#commentstyle)

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.CommentStyle.JSDOC">JSDOC</a></code> | Parse JSDoc style comments only. |
| <code><a href="#@nikovirtala/projen-constructs.CommentStyle.BLOCK">BLOCK</a></code> | Parse block comments. |
| <code><a href="#@nikovirtala/projen-constructs.CommentStyle.LINE">LINE</a></code> | Parse line comments (//). |
| <code><a href="#@nikovirtala/projen-constructs.CommentStyle.ALL">ALL</a></code> | Parse all comment styles. |

---

##### `JSDOC` <a name="JSDOC" id="@nikovirtala/projen-constructs.CommentStyle.JSDOC"></a>

Parse JSDoc style comments only.

---


##### `BLOCK` <a name="BLOCK" id="@nikovirtala/projen-constructs.CommentStyle.BLOCK"></a>

Parse block comments.

---


##### `LINE` <a name="LINE" id="@nikovirtala/projen-constructs.CommentStyle.LINE"></a>

Parse line comments (//).

---


##### `ALL` <a name="ALL" id="@nikovirtala/projen-constructs.CommentStyle.ALL"></a>

Parse all comment styles.

---


### CoverageProvider <a name="CoverageProvider" id="@nikovirtala/projen-constructs.CoverageProvider"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.CoverageProvider.ISTANBUL">ISTANBUL</a></code> | Provide coverage report using istanbul. |
| <code><a href="#@nikovirtala/projen-constructs.CoverageProvider.V8">V8</a></code> | Provide coverage reports using v8. |

---

##### `ISTANBUL` <a name="ISTANBUL" id="@nikovirtala/projen-constructs.CoverageProvider.ISTANBUL"></a>

Provide coverage report using istanbul.

> [https://istanbul.js.org](https://istanbul.js.org)

---


##### `V8` <a name="V8" id="@nikovirtala/projen-constructs.CoverageProvider.V8"></a>

Provide coverage reports using v8.

> [https://v8.dev/blog/javascript-code-coverage](https://v8.dev/blog/javascript-code-coverage)

---


### CoverageReporter <a name="CoverageReporter" id="@nikovirtala/projen-constructs.CoverageReporter"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.CoverageReporter.CLOVER">CLOVER</a></code> | Provides `clover` report. |
| <code><a href="#@nikovirtala/projen-constructs.CoverageReporter.HTML">HTML</a></code> | Provides `HTML` report. |
| <code><a href="#@nikovirtala/projen-constructs.CoverageReporter.JSON">JSON</a></code> | Provides `JSON` report. |
| <code><a href="#@nikovirtala/projen-constructs.CoverageReporter.LCOV">LCOV</a></code> | Provides `LCOV` report. |
| <code><a href="#@nikovirtala/projen-constructs.CoverageReporter.TEXT">TEXT</a></code> | Provides `text` report. |

---

##### `CLOVER` <a name="CLOVER" id="@nikovirtala/projen-constructs.CoverageReporter.CLOVER"></a>

Provides `clover` report.

---


##### `HTML` <a name="HTML" id="@nikovirtala/projen-constructs.CoverageReporter.HTML"></a>

Provides `HTML` report.

---


##### `JSON` <a name="JSON" id="@nikovirtala/projen-constructs.CoverageReporter.JSON"></a>

Provides `JSON` report.

---


##### `LCOV` <a name="LCOV" id="@nikovirtala/projen-constructs.CoverageReporter.LCOV"></a>

Provides `LCOV` report.

---


##### `TEXT` <a name="TEXT" id="@nikovirtala/projen-constructs.CoverageReporter.TEXT"></a>

Provides `text` report.

---


### EntryPointStrategy <a name="EntryPointStrategy" id="@nikovirtala/projen-constructs.EntryPointStrategy"></a>

Specifies the strategy to be used to convert entry points into documentation.

> [https://typedoc.org/documents/Options.Input.html#entrypointstrategy](https://typedoc.org/documents/Options.Input.html#entrypointstrategy)

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.EntryPointStrategy.RESOLVE">RESOLVE</a></code> | Expects all entry points to be contained within a single package. |
| <code><a href="#@nikovirtala/projen-constructs.EntryPointStrategy.EXPAND">EXPAND</a></code> | Expects all entry points to be top-level directories. |
| <code><a href="#@nikovirtala/projen-constructs.EntryPointStrategy.PACKAGES">PACKAGES</a></code> | Expects all entry points to be individual files. |
| <code><a href="#@nikovirtala/projen-constructs.EntryPointStrategy.MERGE">MERGE</a></code> | Merges multiple projects into a single documentation site. |

---

##### `RESOLVE` <a name="RESOLVE" id="@nikovirtala/projen-constructs.EntryPointStrategy.RESOLVE"></a>

Expects all entry points to be contained within a single package.

---


##### `EXPAND` <a name="EXPAND" id="@nikovirtala/projen-constructs.EntryPointStrategy.EXPAND"></a>

Expects all entry points to be top-level directories.

---


##### `PACKAGES` <a name="PACKAGES" id="@nikovirtala/projen-constructs.EntryPointStrategy.PACKAGES"></a>

Expects all entry points to be individual files.

---


##### `MERGE` <a name="MERGE" id="@nikovirtala/projen-constructs.EntryPointStrategy.MERGE"></a>

Merges multiple projects into a single documentation site.

---


### Environment <a name="Environment" id="@nikovirtala/projen-constructs.Environment"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.Environment.EDGE_RUNTIME">EDGE_RUNTIME</a></code> | Run tests in Vercel's Edge Runtime VM. |
| <code><a href="#@nikovirtala/projen-constructs.Environment.HAPPY_DOM">HAPPY_DOM</a></code> | Run tests in `happy-dom` environment. |
| <code><a href="#@nikovirtala/projen-constructs.Environment.JSDOM">JSDOM</a></code> | Run tests in `jsdom` environment. |
| <code><a href="#@nikovirtala/projen-constructs.Environment.NODE">NODE</a></code> | Run tests in a Node.js environment. |

---

##### `EDGE_RUNTIME` <a name="EDGE_RUNTIME" id="@nikovirtala/projen-constructs.Environment.EDGE_RUNTIME"></a>

Run tests in Vercel's Edge Runtime VM.

> [https://edge-runtime.vercel.app/packages/vm](https://edge-runtime.vercel.app/packages/vm)

---


##### `HAPPY_DOM` <a name="HAPPY_DOM" id="@nikovirtala/projen-constructs.Environment.HAPPY_DOM"></a>

Run tests in `happy-dom` environment.

> [https://github.com/capricorn86/happy-dom](https://github.com/capricorn86/happy-dom)

---


##### `JSDOM` <a name="JSDOM" id="@nikovirtala/projen-constructs.Environment.JSDOM"></a>

Run tests in `jsdom` environment.

> [https://github.com/jsdom/jsdom](https://github.com/jsdom/jsdom)

---


##### `NODE` <a name="NODE" id="@nikovirtala/projen-constructs.Environment.NODE"></a>

Run tests in a Node.js environment.

---


### LogLevel <a name="LogLevel" id="@nikovirtala/projen-constructs.LogLevel"></a>

Specifies the logger that should be used.

> [https://typedoc.org/documents/Options.Other.html#loglevel](https://typedoc.org/documents/Options.Other.html#loglevel)

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.LogLevel.VERBOSE">VERBOSE</a></code> | Log all messages including verbose debug information. |
| <code><a href="#@nikovirtala/projen-constructs.LogLevel.INFO">INFO</a></code> | Log informational messages and above. |
| <code><a href="#@nikovirtala/projen-constructs.LogLevel.WARN">WARN</a></code> | Log warnings and errors only. |
| <code><a href="#@nikovirtala/projen-constructs.LogLevel.ERROR">ERROR</a></code> | Log errors only. |
| <code><a href="#@nikovirtala/projen-constructs.LogLevel.NONE">NONE</a></code> | Disable all logging. |

---

##### `VERBOSE` <a name="VERBOSE" id="@nikovirtala/projen-constructs.LogLevel.VERBOSE"></a>

Log all messages including verbose debug information.

---


##### `INFO` <a name="INFO" id="@nikovirtala/projen-constructs.LogLevel.INFO"></a>

Log informational messages and above.

---


##### `WARN` <a name="WARN" id="@nikovirtala/projen-constructs.LogLevel.WARN"></a>

Log warnings and errors only.

---


##### `ERROR` <a name="ERROR" id="@nikovirtala/projen-constructs.LogLevel.ERROR"></a>

Log errors only.

---


##### `NONE` <a name="NONE" id="@nikovirtala/projen-constructs.LogLevel.NONE"></a>

Disable all logging.

---


### Pool <a name="Pool" id="@nikovirtala/projen-constructs.Pool"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.Pool.FORKS">FORKS</a></code> | Run tests in `node:child_process` using fork(). |
| <code><a href="#@nikovirtala/projen-constructs.Pool.THREADS">THREADS</a></code> | Run tests in `node:worker_threads`. |
| <code><a href="#@nikovirtala/projen-constructs.Pool.VMFORKS">VMFORKS</a></code> | Run tests in isolated `node:vm`. |
| <code><a href="#@nikovirtala/projen-constructs.Pool.VMTHREADS">VMTHREADS</a></code> | Run tests in isolated `node:vm`. Test files are run parallel using `node:worker_threads`. |

---

##### `FORKS` <a name="FORKS" id="@nikovirtala/projen-constructs.Pool.FORKS"></a>

Run tests in `node:child_process` using fork().

Test isolation (when enabled) is done by spawning a new child process for each test file.

> [https://nodejs.org/api/child_process.html#child_processforkmodulepath-args-options](https://nodejs.org/api/child_process.html#child_processforkmodulepath-args-options)

---


##### `THREADS` <a name="THREADS" id="@nikovirtala/projen-constructs.Pool.THREADS"></a>

Run tests in `node:worker_threads`.

Test isolation (when enabled) is done by spawning a new thread for each test file.

---


##### `VMFORKS` <a name="VMFORKS" id="@nikovirtala/projen-constructs.Pool.VMFORKS"></a>

Run tests in isolated `node:vm`.

Test files are run parallel using `node:child_process` fork()

This makes tests run faster, but VM module is unstable. Your tests might leak memory.

> [https://nodejs.org/api/child_process.html#child_processforkmodulepath-args-options](https://nodejs.org/api/child_process.html#child_processforkmodulepath-args-options)

---


##### `VMTHREADS` <a name="VMTHREADS" id="@nikovirtala/projen-constructs.Pool.VMTHREADS"></a>

Run tests in isolated `node:vm`. Test files are run parallel using `node:worker_threads`.

This makes tests run faster, but VM module is unstable. Your tests might leak memory.

---


### ProjectType <a name="ProjectType" id="@nikovirtala/projen-constructs.ProjectType"></a>

Enum defining all supported project types.

Each project type corresponds to a generated project class and its configuration
in the defaultOptions structure.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.ProjectType.AWS_CDK_CONSTRUCT_LIBRARY">AWS_CDK_CONSTRUCT_LIBRARY</a></code> | AWS CDK construct library project. |
| <code><a href="#@nikovirtala/projen-constructs.ProjectType.AWS_CDK_JAVA_APP">AWS_CDK_JAVA_APP</a></code> | AWS CDK app in Java. |
| <code><a href="#@nikovirtala/projen-constructs.ProjectType.AWS_CDK_PYTHON_APP">AWS_CDK_PYTHON_APP</a></code> | AWS CDK app in Python. |
| <code><a href="#@nikovirtala/projen-constructs.ProjectType.AWS_CDK_TYPE_SCRIPT_APP">AWS_CDK_TYPE_SCRIPT_APP</a></code> | AWS CDK app in TypeScript. |
| <code><a href="#@nikovirtala/projen-constructs.ProjectType.CDK8S_PYTHON_APP">CDK8S_PYTHON_APP</a></code> | CDK8s app in Python. |
| <code><a href="#@nikovirtala/projen-constructs.ProjectType.CDK8S_TYPE_SCRIPT_APP">CDK8S_TYPE_SCRIPT_APP</a></code> | CDK8s app in TypeScript. |
| <code><a href="#@nikovirtala/projen-constructs.ProjectType.CONSTRUCT_LIBRARY_CDK8S">CONSTRUCT_LIBRARY_CDK8S</a></code> | CDK8s construct library project. |
| <code><a href="#@nikovirtala/projen-constructs.ProjectType.CONSTRUCT_LIBRARY_CDKTF">CONSTRUCT_LIBRARY_CDKTF</a></code> | CDKTF construct library project. |
| <code><a href="#@nikovirtala/projen-constructs.ProjectType.GIT_HUB_PROJECT">GIT_HUB_PROJECT</a></code> | GitHub-based project. |
| <code><a href="#@nikovirtala/projen-constructs.ProjectType.JAVA_PROJECT">JAVA_PROJECT</a></code> | Java project. |
| <code><a href="#@nikovirtala/projen-constructs.ProjectType.JSII_PROJECT">JSII_PROJECT</a></code> | Multi-language jsii library project. |
| <code><a href="#@nikovirtala/projen-constructs.ProjectType.NEXT_JS_PROJECT">NEXT_JS_PROJECT</a></code> | Next.js project using JavaScript. |
| <code><a href="#@nikovirtala/projen-constructs.ProjectType.NEXT_JS_TYPE_SCRIPT_PROJECT">NEXT_JS_TYPE_SCRIPT_PROJECT</a></code> | Next.js project using TypeScript. |
| <code><a href="#@nikovirtala/projen-constructs.ProjectType.NODE_PROJECT">NODE_PROJECT</a></code> | Node.js project. |
| <code><a href="#@nikovirtala/projen-constructs.ProjectType.PYTHON_PROJECT">PYTHON_PROJECT</a></code> | Python project. |
| <code><a href="#@nikovirtala/projen-constructs.ProjectType.REACT_PROJECT">REACT_PROJECT</a></code> | React project using JavaScript. |
| <code><a href="#@nikovirtala/projen-constructs.ProjectType.REACT_TYPE_SCRIPT_PROJECT">REACT_TYPE_SCRIPT_PROJECT</a></code> | React project using TypeScript. |
| <code><a href="#@nikovirtala/projen-constructs.ProjectType.TYPE_SCRIPT_APP_PROJECT">TYPE_SCRIPT_APP_PROJECT</a></code> | TypeScript app. |
| <code><a href="#@nikovirtala/projen-constructs.ProjectType.TYPE_SCRIPT_PROJECT">TYPE_SCRIPT_PROJECT</a></code> | TypeScript project. |

---

##### `AWS_CDK_CONSTRUCT_LIBRARY` <a name="AWS_CDK_CONSTRUCT_LIBRARY" id="@nikovirtala/projen-constructs.ProjectType.AWS_CDK_CONSTRUCT_LIBRARY"></a>

AWS CDK construct library project.

---


##### `AWS_CDK_JAVA_APP` <a name="AWS_CDK_JAVA_APP" id="@nikovirtala/projen-constructs.ProjectType.AWS_CDK_JAVA_APP"></a>

AWS CDK app in Java.

---


##### `AWS_CDK_PYTHON_APP` <a name="AWS_CDK_PYTHON_APP" id="@nikovirtala/projen-constructs.ProjectType.AWS_CDK_PYTHON_APP"></a>

AWS CDK app in Python.

---


##### `AWS_CDK_TYPE_SCRIPT_APP` <a name="AWS_CDK_TYPE_SCRIPT_APP" id="@nikovirtala/projen-constructs.ProjectType.AWS_CDK_TYPE_SCRIPT_APP"></a>

AWS CDK app in TypeScript.

---


##### `CDK8S_PYTHON_APP` <a name="CDK8S_PYTHON_APP" id="@nikovirtala/projen-constructs.ProjectType.CDK8S_PYTHON_APP"></a>

CDK8s app in Python.

---


##### `CDK8S_TYPE_SCRIPT_APP` <a name="CDK8S_TYPE_SCRIPT_APP" id="@nikovirtala/projen-constructs.ProjectType.CDK8S_TYPE_SCRIPT_APP"></a>

CDK8s app in TypeScript.

---


##### `CONSTRUCT_LIBRARY_CDK8S` <a name="CONSTRUCT_LIBRARY_CDK8S" id="@nikovirtala/projen-constructs.ProjectType.CONSTRUCT_LIBRARY_CDK8S"></a>

CDK8s construct library project.

---


##### `CONSTRUCT_LIBRARY_CDKTF` <a name="CONSTRUCT_LIBRARY_CDKTF" id="@nikovirtala/projen-constructs.ProjectType.CONSTRUCT_LIBRARY_CDKTF"></a>

CDKTF construct library project.

---


##### `GIT_HUB_PROJECT` <a name="GIT_HUB_PROJECT" id="@nikovirtala/projen-constructs.ProjectType.GIT_HUB_PROJECT"></a>

GitHub-based project.

---


##### `JAVA_PROJECT` <a name="JAVA_PROJECT" id="@nikovirtala/projen-constructs.ProjectType.JAVA_PROJECT"></a>

Java project.

---


##### `JSII_PROJECT` <a name="JSII_PROJECT" id="@nikovirtala/projen-constructs.ProjectType.JSII_PROJECT"></a>

Multi-language jsii library project.

---


##### `NEXT_JS_PROJECT` <a name="NEXT_JS_PROJECT" id="@nikovirtala/projen-constructs.ProjectType.NEXT_JS_PROJECT"></a>

Next.js project using JavaScript.

---


##### `NEXT_JS_TYPE_SCRIPT_PROJECT` <a name="NEXT_JS_TYPE_SCRIPT_PROJECT" id="@nikovirtala/projen-constructs.ProjectType.NEXT_JS_TYPE_SCRIPT_PROJECT"></a>

Next.js project using TypeScript.

---


##### `NODE_PROJECT` <a name="NODE_PROJECT" id="@nikovirtala/projen-constructs.ProjectType.NODE_PROJECT"></a>

Node.js project.

---


##### `PYTHON_PROJECT` <a name="PYTHON_PROJECT" id="@nikovirtala/projen-constructs.ProjectType.PYTHON_PROJECT"></a>

Python project.

---


##### `REACT_PROJECT` <a name="REACT_PROJECT" id="@nikovirtala/projen-constructs.ProjectType.REACT_PROJECT"></a>

React project using JavaScript.

---


##### `REACT_TYPE_SCRIPT_PROJECT` <a name="REACT_TYPE_SCRIPT_PROJECT" id="@nikovirtala/projen-constructs.ProjectType.REACT_TYPE_SCRIPT_PROJECT"></a>

React project using TypeScript.

---


##### `TYPE_SCRIPT_APP_PROJECT` <a name="TYPE_SCRIPT_APP_PROJECT" id="@nikovirtala/projen-constructs.ProjectType.TYPE_SCRIPT_APP_PROJECT"></a>

TypeScript app.

---


##### `TYPE_SCRIPT_PROJECT` <a name="TYPE_SCRIPT_PROJECT" id="@nikovirtala/projen-constructs.ProjectType.TYPE_SCRIPT_PROJECT"></a>

TypeScript project.

---


### Visibility <a name="Visibility" id="@nikovirtala/projen-constructs.Visibility"></a>

Specifies the default visibility for members without a visibility tag.

> [https://typedoc.org/documents/Options.Comments.html#defaultvisibility](https://typedoc.org/documents/Options.Comments.html#defaultvisibility)

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-constructs.Visibility.PUBLIC">PUBLIC</a></code> | Public visibility - accessible from anywhere. |
| <code><a href="#@nikovirtala/projen-constructs.Visibility.PROTECTED">PROTECTED</a></code> | Protected visibility - accessible from class and subclasses. |
| <code><a href="#@nikovirtala/projen-constructs.Visibility.PRIVATE">PRIVATE</a></code> | Private visibility - accessible only within the class. |

---

##### `PUBLIC` <a name="PUBLIC" id="@nikovirtala/projen-constructs.Visibility.PUBLIC"></a>

Public visibility - accessible from anywhere.

---


##### `PROTECTED` <a name="PROTECTED" id="@nikovirtala/projen-constructs.Visibility.PROTECTED"></a>

Protected visibility - accessible from class and subclasses.

---


##### `PRIVATE` <a name="PRIVATE" id="@nikovirtala/projen-constructs.Visibility.PRIVATE"></a>

Private visibility - accessible only within the class.

---

