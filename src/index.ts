import type { Webflow } from '@finsweet/ts-utils';

import { initializeDynamicFilters } from '$utils/initDynamicFilters';

declare global {
  interface Window {
    fsAttributes: Array<['cmsload', (listInstances: any) => void & { cmsfilter?: any }] | any[]>;
  }
}

window.fsAttributes = window.fsAttributes || [];
window.fsAttributes.push([
  'cmsload',
  (listInstances) => {
    console.log('custom code loaded');
    
   

    window.Webflow ||= [];
    window.Webflow.push(() => {

      initializeDynamicFilters() 
      const filterDiv = document.getElementById('filter');
      const loader = document.getElementById('loader') as HTMLElement;
      if (filterDiv && loader) {
        filterDiv.classList.remove('hide'); 
        loader.style.display = 'none';
      }
    });
  },
]);
