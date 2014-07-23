/*
 * Copyright (c) 2014 Gloey Apps
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * @author: Hein Rutjes (IjzerenHein)
 * @license MIT
 * @copyright Gloey Apps, 2014
 */

/*global define*/

define(function(require) {
    'use strict';

    // import dependencies
    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var StateModifier = require('famous/modifiers/StateModifier');
    var KenBurnsContainer = require('famous-kenburns');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');

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
        size: [845, 468]
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
    // Do some nice ken burns effects
    //
    kenBurns.panAndZoom([0.1, 0.05], 1.9); // eric idle
    kenBurns.delay();
    kenBurns.panAndZoom([0.35, 0.05], 3.0); // graham chapman
    kenBurns.delay();
    kenBurns.panAndZoom([0.65, 0.1], 2.6); // john cleese
    kenBurns.delay();
    kenBurns.panAndZoom([0.9, 0.44], 2.9); // terry gilliam
    kenBurns.delay();
    kenBurns.panAndZoom([0.80, 0.6], 2.2); // terry jones
    kenBurns.delay();
    kenBurns.panAndZoom([0.45, 0.65], 2.4); // michael palin
    kenBurns.delay();
    kenBurns.panAndZoom([0.5, 0.5], 1.0); // zoom-out - monty python, thanks guys
});
