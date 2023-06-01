import { createEffect } from 'solid-js';

const TableauViz: () => JSX.Element = () => {
  createEffect(() => {
    const divElement = document.getElementById('viz1685597832281');
    const vizElement = divElement.getElementsByTagName('object')[0];

    if (divElement.offsetWidth > 800) {
      vizElement.style.minWidth = '420px';
      vizElement.style.maxWidth = '950px';
      vizElement.style.width = '100%';
      vizElement.style.minHeight = '587px';
      vizElement.style.maxHeight = '887px';
      vizElement.style.height = `${divElement.offsetWidth * 0.75}px`;
    } else if (divElement.offsetWidth > 500) {
      vizElement.style.minWidth = '420px';
      vizElement.style.maxWidth = '950px';
      vizElement.style.width = '100%';
      vizElement.style.minHeight = '587px';
      vizElement.style.maxHeight = '887px';
      vizElement.style.height = `${divElement.offsetWidth * 0.75}px`;
    } else {
      vizElement.style.width = '100%';
      vizElement.style.height = '1727px';
    }

    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode?.insertBefore(scriptElement, vizElement);
  });

  return (
    <div className="tableauPlaceholder" id="viz1685597832281" style={{ position: 'relative' }}>
      <noscript>
        <a href="#">
          <img
            alt="Dashboard 1"
            src="https://public.tableau.com/static/images/so/socialmedia_16853842767100/Dashboard1/1_rss.png"
            style={{ border: 'none' }}
          />
        </a>
      </noscript>
      <object
        className="tableauViz"
        style={{ display: 'none' }}
        data-testid="tableau-viz"
      >
        <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
        <param name="embed_code_version" value="3" />
        <param name="site_root" value="" />
        <param name="name" value="socialmedia_16853842767100/Dashboard1" />
        <param name="tabs" value="no" />
        <param name="toolbar" value="yes" />
        <param name="static_image" value="https://public.tableau.com/static/images/so/socialmedia_16853842767100/Dashboard1/1.png" />
        <param name="animate_transition" value="yes" />
        <param name="display_static_image" value="yes" />
        <param name="display_spinner" value="yes" />
        <param name="display_overlay" value="yes" />
        <param name="display_count" value="yes" />
        <param name="language" value="en-GB" />
        <param name="filter" value="publish=yes" />
      </object>
    </div>
  );
};

export default TableauViz;
