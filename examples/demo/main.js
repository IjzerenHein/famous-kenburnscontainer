/**
 * This Source Code is licensed under the MIT license. If a copy of the
 * MIT-license was not distributed with this file, You can obtain one at:
 * http://opensource.org/licenses/mit-license.html.
 *
 * @author: Hein Rutjes (IjzerenHein)
 * @license MIT
 * @copyright Gloey Apps, 2014/2015
 */

define(function(require) {
    'use strict';

    // import dependencies
    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var Surface = require('famous/core/Surface');
    var KenBurnsContainer = require('famous-kenburnscontainer');

    //
    // create the main context
    //
    var mainContext = Engine.createContext();

    //
    // create ken burns container
    //
    var modifier = new Modifier({
        origin: [0.5, 0.5],
        align: [0.5, 0.5],
        size: [320, 190]
    });
    var kenBurns = new KenBurnsContainer({
        containerSurface: {
            classes: ['kenburns']
        },
        delay: 3000
    });
    mainContext.add(modifier).add(kenBurns);

    //
    // add photo
    //
    var photo = new Surface({
        classes: ['photo']
    });
    kenBurns.add(photo);

    //
    // create frame
    //
    var frameModifier = new Modifier({
        origin: [0.5, 0.5],
        align: [0.5, 0.5]
    });
    var frame = new Surface({
        classes: ['frame']
    });
    mainContext.add(frameModifier).add(frame);

    //
    // Do some nice ken burns effects
    //
    kenBurns.panAndZoom([0.0, 0.05], 1.9); // eric idle
    kenBurns.delay();
    kenBurns.panAndZoom([0.32, 0.05], 3.0); // graham chapman
    kenBurns.delay();
    kenBurns.panAndZoom([0.65, 0.1], 2.8); // john cleese
    kenBurns.delay();
    kenBurns.panAndZoom([1.0, 0.44], 3.3); // terry gilliam
    kenBurns.delay();
    kenBurns.panAndZoom([0.80, 0.6], 2.2); // terry jones
    kenBurns.delay();
    kenBurns.panAndZoom([0.45, 0.65], 2.9); // michael palin
    kenBurns.delay();
    kenBurns.panAndZoom([0.5, 0.5], 1.0); // zoom-out - monty python, thanks guys
});
