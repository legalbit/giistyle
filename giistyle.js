javascript:(
    function() {
        var stylesheets = Array.prototype.slice.call(document.getElementsByTagName('link'));
        stylesheets.forEach(sheet => {
            if(sheet.getAttribute('type').toLowerCase() == 'text/css') {
                sheet.parentNode.removeChild(sheet);
            }
        });

        var s = document.createElement("style");
        /* use template string with ``  */
        s.innerHTML = `
            body { 
                color: #343231;
                font-family: Georgia, serif;
                font-size: 14px;
                margin: .5em; 
            }
            a {
                font-family: sans-serif;
                color: #235FE9;
                text-decoration: none;
            }
            a:hover {
                text-decoration: underline;
            }
            ::selection {
                background-color: #FFF52A;
            }
            #fTop,
            #fTopLogos,
            #nav_12793 {
                display: none;
            }
            #level2 {
                margin-top: 1em;
            }
            #blaettercontainer_12793,
            #fusszeile {
                display: flex;
                height: 2em;
                align-items: center;
            }
            #blaettern_zurueck,
            #blaettern_weiter,
            #relLinks,
            #relRechts,
            #relCenter {
                flex-grow: 1;
                width: auto;
            }
            #relLinks {
                margin-left: 1em;
            }
            #blaettern_weiter,
            #relCenter {
                text-align: right;
                margin-right: 1em;
            }
            #relRechts {
                text-align: center;
            }
            #container,
            #blaettercontainer_12793,
            #fusszeile {
                max-width: 45em;
                margin: 0 auto;
            }
            #container {
                padding: 0;
            }
            #fusszeile {
                margin-top: 4em;
                margin-bottom: 2em;
            }

            .jnheader {
                margin-top: 2em;
                text-align: center
            }
            h1 {
                font-family: sans-serif;
                font-weight: normal;
                font-size: 1.5em;
                line-height: 1.3em;
                margin-bottom: 0;
                margin-top: 0.5em;
            }
            h1 span.jnenbez {
                display: inline-block;
                margin-top: 1.5em;
            }
            h1 .jnenbez,
            h1 .jnentitel {
                font-size: .8em;
                font-weight: bold;
                line-height: 1.5em;
            }

            .jurAbsatz {
                margin: 0.5em 0;
                padding: 0.5em 1em;
                line-height: 1.4;
            }
            .jurAbsatz:hover {
                background-color: #F4F4F4;
            }

            dl {
                display: grid;
                grid-template-columns: 2em calc(100% - 2em);
                margin-top: 0.5em;
                margin-right: 1em;
                margin-bottom: 0;
                text-indent: 0;
             }
             dt, dd {
                margin-bottom: 0.5em;
                margin-left: 0;
             }
             .jnfussnote {
                 font-size: 0.8em;
                 margin-top: 4em;
             }
             .jnfussnote h4 {
                 margin-left: 1em;
             }

             #level2 table a {
                 color: #343231;
             }
             h2.headline {
                font-family: sans-serif;
                font-size: 1em;
                margin-bottom: 2em;
             }

             @media print {
                 #blaettercontainer_12793,
                 #fusszeile,
                 .jnheader a {
                     display: none;
                 }
             }
        `;
        document.getElementsByTagName("head")[0].appendChild(s);
    })();
