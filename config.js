var config = {
    // style: 'mapbox://styles/katospiegel/clp4fj4ea002q01r175vpabbz/draft',
    // style: 'mapbox://styles/mapbox/satellite-streets-v12',
    style: 'mapbox://styles/katospiegel/clp4lrzvv01kb01pr3xmvcyif/draft',
    accessToken: 'pk.eyJ1Ijoia2F0b3NwaWVnZWwiLCJhIjoiY2xwNDM5bHdiMTk4cjJqczRxejIzenVjaiJ9._OP0BDAJatBP3lYA0ClU9w',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: "Un tour de Champsec avant et après la Débâcle du Giétro (1818)",
    subtitle: '[Défilez vers le bas]',
    byline: 'par Cristina Peña Rueda & Carlos Vivar Ríos. ',
    footer: '(Time Machine Valais Hackathon 2023) code --> github.com/caviri',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'center',
            hidden: false,
            // title: 'Un tour de Champsec avant et après la Débâcle du Giétro (1818)',
            image: './images/intro.jpg',
            // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [7.348298, 45.998958],
                // center: [7.242627, 46.058479],
                zoom: 12.52,
                pitch: 60,
                bearing: 0
                // zoom: 17.4,
                // pitch: 30,
                // bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'group_topo',
                //     opacity: 0,
                //     // duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'grieto-glacier',
            alignment: 'left',
            hidden: false,
            title: 'Pourquoi ?',
            image: './images/Perraudin.png',
            description: 'Le glacier du Giétroz se précipite à l’entrée de la gorge étroite de Mauvoisin, l’obstrue et refoule la rivière en amont. ',
            location: {
                center: [7.379641, 46.001451],
                zoom: 13.52,
                pitch: 60,
                bearing: 0,
                speed: 0.3,
                curve: 1,
                // zoom: 17.4,
                // pitch: 30,
                // bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'group_topo',
                //     opacity: 0,
                //     // duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'lac-glacier',
            alignment: 'right',
            hidden: false,
            // title: 'Lac Glacier',
            // image: './images/picA.jpeg',
            description: 'Un lac se forme derrière la barre de glace, qui cèdera fatalement quand l’élément liquide aura acquis une forme suffisante pour la rompre et la déblayer.',
            location: { 
                center: [7.349085, 45.997755],
                zoom: 13.52,
                pitch: 30,
                bearing: 0,
                speed: 0.3,
                curve: 1,

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'glacier-bouchon-a43ves',
                    opacity: 0.81
                    // duration: 5000
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'lac-glacier-tunnel',
            alignment: 'left',
            hidden: false,
            title: 'Un bras de fer contre la nature',
            image: './images/PLANOS.png',
            description: "L’ingénieur cantonal Ignace Venetz est dépêché sur place pour tenter de vidanger le lac. Le percement d’une galerie de 200 mètres de longueur à travers la barre de glace permet de faire baisser le volumen du lac de 30 à 20 millions de m3",
            location: { 
                center: [7.349085, 45.997755],
                zoom: 13.52,
                pitch: 30,
                bearing: 0,
                speed: 0.3,
                curve: 1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'glacier-tunnel-2h3ozt',
                    opacity: 1
                    // duration: 5000
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'je-ne-travaille',
            alignment: 'centro',
            hidden: false,
            // title: 'Yo no trabajo',
            image: './images/carta.png',
            // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: { 
                center: [7.349085, 45.997755],
                zoom: 13.52,
                pitch: 30,
                bearing: 0,
                speed: 0.3,
                curve: 1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'group_topo',
                //     opacity: 0,
                //     // duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'lac_closed_valley_view',
            alignment: 'right',
            hidden: false,
            // title: 'Lac Closed Valley View',
            // image: './images/picA.jpeg',
            description: "la Vallée de Bagnes était un centre important d'activités agricoles et pastorales, illustrant le mode de vie traditionnel alpin. Les fermes et les pâturages de la vallée étaient essentiels pour l'économie locale, fournissant subsistance et emploi à ses habitants.",
            location: {
                center: [7.303433, 46.033927],
                zoom: 12.52,
                pitch: 60,
                bearing: -43.2,
                speed: 0.3,
                curve: 1,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'group_topo',
                //     opacity: 0,
                //     // duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'lac_closed_valley_tunnel_open',
            alignment: 'left',
            hidden: false,
            title: 'Le 16 juin 1818 à 16h30, la débâcle commence.',
            image: './images/debacle.png',
            description: "Le vidange d’un lac d’environ 20 millions de m3 d’eau. La débâcle du Giétroz parcourut en une heure et demie à peine la distance de 33 kilomètres, séparant Mauvoisin de l’embouchure de la rivière dans le Rhône.",
            location: {
                center: [7.303433, 46.033927],
                zoom: 12.52,
                pitch: 60,
                bearing: -43.2,
                // speed: 0.3,
                // curve: 1,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'floodedarea-bhyigo',
                    opacity: 0.57,
                    //duration: 2000
                },
                {
                    layer: 'glacier-tunnel-2h3ozt',
                    opacity: 0
                    // duration: 5000
                },
                {
                    layer: 'glacier-bouchon-a43ves',
                    opacity: 0
                    // duration: 5000
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'cenital_view',
            alignment: 'center',
            hidden: false,
            title: '34 victimes périssent',
            // image: './images/picA.jpeg',
            description: 'Environ de 300 bâtiments furent emportés par la débâcle. Les dégâts de l’inondation furent évalués à un million et demi de francs.',
            location: {
                center: [7.196403, 46.075567],
                zoom: 10.74,
                pitch: 0,
                bearing: 0,
                speed: 0.3,
                curve: 1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'floodedarea-bhyigo',
                //     opacity: 0.57,
                //     duration: 2000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'champsec_1',
            alignment: 'center',
            hidden: false,
            title: 'Champsec est le village le plus affecté',
            // image: './images/picA.jpeg',
            // description: 'Champsec est le village le plus affecté. ',
            location: {
                center: [7.248639, 46.055019],
                zoom: 14.52,
                pitch: 8.01,
                bearing: 0.00,
                speed: 0.3, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                layer: 'floodedarea-bhyigo',
                opacity: 0.37,
                //duration: 2000
            }
            ],
            onChapterExit: []
        },
        {
            id: 'champsec_carrio',
            alignment: 'right',
            hidden: false,
            // title: 'Cherchant à se mettre à l’abri de la Dranse capricieuse, les habitants du village désignèrent un nouvel emplacement : le rocher sur le coteau qui domine le village.',
            image: './images/carrion.png',
            // description: 'Champsec est le village le plus affecté. ',
            location: {
                center: [7.2436773, 46.0563139],
                zoom: 16.52,
                pitch: 8.01,
                bearing: 0.00,
                speed: 0.3, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                layer: 'floodedarea-bhyigo',
                opacity: 0.37,
                //duration: 2000
            }
            ],
            onChapterExit: []
        },
        {
            id: 'champsec_people',
            alignment: 'center',
            hidden: false,
            // title: 'Champsec',
            image: './images/damnificados.png',
            // description: 'Champsec est le village le plus affecté. ',
            location: {
                center: [7.2436773, 46.0563139],
                zoom: 16.52,
                pitch: 8.01,
                bearing: 0.00,
                speed: 0.3, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                layer: 'floodedarea-bhyigo',
                opacity: 0.37,
                //duration: 2000
            }
            ],
            onChapterExit: []
        },
        {
            id: 'champsec_old_rio',
            alignment: 'left',
            hidden: false,
            // title: 'Champsec Toponyme',
            // image: './images/picA.jpeg',
            description: 'La catastrophe finirait par affecter le cours de la rivière, qui fut déplacé de là...',
            location: {
                center: [7.241237, 46.058950],
                zoom: 17.52,
                pitch: 8.01,
                bearing: 0.00,
                speed: 0.3, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'old-river-5ykui8',
                    opacity: 0.8,
                    //duration: 2000
                },
                {
                    layer: 'floodedarea-bhyigo',
                    opacity: 0.1,
                    //duration: 2000
                }
            ],
            onChapterExit: []
        },
        {
            id: 'champsec_new_rio',
            alignment: 'right',
            hidden: false,
            // title: 'Champsec Toponyme',
            // image: './images/picA.jpeg',
            description: '...à ce point-là',
            location: {
                center: [7.244342, 46.059952],
                zoom: 16.52,
                pitch: 8.01,
                bearing: 0.00,
                speed: 0.3, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'rio-nuevo-csfonm',
                    opacity: 0.8,
                    //duration: 2000
                }
            ],
            onChapterExit: []
        },
        {
            id: 'champsec_sedimentos',
            alignment: 'right',
            hidden: false,
            // title: 'Champsec Toponyme',
            // image: './images/picA.jpeg',
            description: 'De plus, laissant de nombreux sédiments qui changeraient à jamais le profil du village.',
            location: {
                center: [7.242778, 46.058867],
                zoom: 15.52,
                pitch: 8.01,
                bearing: 0.00,
                speed: 0.3, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'sedimentos-4iw2sf',
                    opacity: 0.48,
                    //duration: 2000
                }
            ],
            onChapterExit: []
        },
        {
            id: 'champsec_chapelle',
            alignment: 'left',
            hidden: false,
            // title: 'Champsec Toponyme',
            image: './images/capilla.png',
            description: 'Cherchant à se mettre à l’abri de la Dranse capricieuse, les habitants du village désignèrent un nouvel emplacement : le rocher sur le coteau qui domine le village.',
            location: {
                center: [7.2436773, 46.0563139],
                zoom: 17.52,
                pitch: 8.01,
                bearing: 0.00,
                speed: 0.3, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'chapelle-10nc0d',
                    opacity: 0.51,
                    //duration: 2000
                }
            ],
            onChapterExit: []
        },
        {
            id: 'photo0',
            alignment: 'center',
            hidden: false,
            // title: 'Champsec Toponyme',
            // image: './images/old1.jpg',
            description: "Les dégâts de l'inondation de 1818 furent évalués à un million et demi de francs. Mais les plus grandes misères furent soulagées par des dons maguifiques qui affluèrent de tous les points cardinaux de la patrie suisse, des colonies suisses dans les grandes villes de l'étranger et des étrangers eux-mêmes.",
            location: {
                center: [7.2423695, 46.056632],
                zoom: 13.52,
                pitch: 8.01,
                bearing: 0.00,
                speed: 0.3, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'photo1',
            alignment: 'center',
            hidden: false,
            // title: 'Champsec Toponyme',
            image: './images/old1.jpg',
            // description: 'Copy these sections to add to your story.',
            location: {
                center: [7.2423695, 46.056632],
                zoom: 13.52,
                pitch: 8.01,
                bearing: 0.00,
                speed: 0.3, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'photo2',
            alignment: 'center',
            hidden: false,
            // title: 'Champsec Toponyme',
            image: './images/old2.jpg',
            // description: 'Copy these sections to add to your story.',
            location: {
                center: [7.2423695, 46.056632],
                zoom: 13.52,
                pitch: 8.01,
                bearing: 0.00,
                speed: 0.3, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        // {
        //     id: 'photo3',
        //     alignment: 'center',
        //     hidden: false,
        //     // title: 'Champsec Toponyme',
        //     image: './images/old3.jpg',
        //     // description: 'Copy these sections to add to your story.',
        //     location: {
        //         center: [7.2423695, 46.056632],
        //         zoom: 13.52,
        //         pitch: 8.01,
        //         bearing: 0.00,
        //         speed: 0.3, // make the flying slow
        //         curve: 1, // change the speed at which it zooms out
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        // {
        //     id: 'photo4',
        //     alignment: 'center',
        //     hidden: false,
        //     // title: 'Champsec Toponyme',
        //     image: './images/old4.jpg',
        //     // description: 'Copy these sections to add to your story.',
        //     location: {
        //         center: [7.2423695, 46.056632],
        //         zoom: 13.52,
        //         pitch: 8.01,
        //         bearing: 0.00,
        //         speed: 0.3, // make the flying slow
        //         curve: 1, // change the speed at which it zooms out
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        // {
        //     id: 'photo5',
        //     alignment: 'center',
        //     hidden: false,
        //     // title: 'Champsec Toponyme',
        //     image: './images/old5.jpg',
        //     // description: 'Copy these sections to add to your story.',
        //     location: {
        //         center: [7.2423695, 46.056632],
        //         zoom: 13.52,
        //         pitch: 8.01,
        //         bearing: 0.00,
        //         speed: 0.3, // make the flying slow
        //         curve: 1, // change the speed at which it zooms out
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        // {
        //     id: 'photo6',
        //     alignment: 'center',
        //     hidden: false,
        //     // title: 'Champsec Toponyme',
        //     image: './images/old6.jpg',
        //     // description: 'Copy these sections to add to your story.',
        //     location: {
        //         center: [7.2423695, 46.056632],
        //         zoom: 13.52,
        //         pitch: 8.01,
        //         bearing: 0.00,
        //         speed: 0.3, // make the flying slow
        //         curve: 1, // change the speed at which it zooms out
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        // {
        //     id: 'photo7',
        //     alignment: 'center',
        //     hidden: false,
        //     // title: 'Champsec Toponyme',
        //     image: './images/old7.jpg',
        //     // description: 'Copy these sections to add to your story.',
        //     location: {
        //         center: [7.2423695, 46.056632],
        //         zoom: 13.52,
        //         pitch: 8.01,
        //         bearing: 0.00,
        //         speed: 0.3, // make the flying slow
        //         curve: 1, // change the speed at which it zooms out
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        {
            id: 'photo7',
            alignment: 'center',
            hidden: false,
            title: 'De nos jours, 401 personnes habitent Champsec dans les temps actuels.',
            image: './images/camping.jpg',
            // description: 'De nos jours, 401 personnes habitent Champsec dans les temps actuels. Un exemple de la résilience des êtres humains.',
            location: {
                center: [7.2423695, 46.056632],
                zoom: 13.52,
                pitch: 8.01,
                bearing: 0.00,
                speed: 0.3, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
        
    ]
};
