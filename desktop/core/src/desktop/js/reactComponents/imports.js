// ADD NEW REACT COMPONENTS HERE
// For a react root we need a way to match an imported module with a component name
// so we handle the imports dynamically for that reason.
export async function loadComponent(name) {
  switch (name) {
    // Page specific root components here
    case 'ReactExample':
      return (await import('../apps/editor/components/result/reactExample/ReactExample')).default;
    case 'ExplainSql':
      return (await import('../apps/editor/components/AiAssist/AiAssist')).default;
    case 'AiAssistBar':
      return (await import('../apps/editor/components/AiAssist/AiAssistBar')).default;

    // Application global root components here
    case 'AppBanner':
      return (await import('./AppBanner/AppBanner')).default;

    case 'ReactExampleGlobal':
      return (await import('./ReactExampleGlobal/ReactExampleGlobal')).default;

    case 'FileChooserWithButton':
      return (await import('./FileChooser/FileChooserWithButton/FileChooserWithButton')).default;

    default:
      console.error(`A placeholder component is rendered because you probably forgot to include your new component in the 
      loadComponent function of reactComponents/imports.js`);
      return (await import('./FallbackComponent')).default;
  }
}
