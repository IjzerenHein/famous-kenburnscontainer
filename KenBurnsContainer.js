/**
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

/**
 * Ken burns effect for famo.us
 * @module
 */
define(function(require, exports, module) {
'use strict';

    // import dependencies
    var StateModifier = require('famous/modifiers/StateModifier');
    var ContainerSurface = require('famous/surfaces/ContainerSurface');
    var View = require('famous/core/View');
    var Transform = require('famous/core/Transform');
    var Easing = require('famous/transitions/Easing');

    /**
     * @class
     * @param {Object} options Options.
     * @alias module:KenBurnsContainer
     */
    function KenBurnsContainer() {
        View.apply(this, arguments);

        // create container-surface
        this._containerSurface = new ContainerSurface(this.options.containerSurface);
        this._node.add(this._containerSurface);

        // create state-modifier for doing animations
        this.modifier = new StateModifier(this.options.modifier);
        this._renderable = this._containerSurface.add(this.modifier);

        // init
        this._newPosition = this.options.modifier.origin;
        this._newZoomScale = 1.0;
    }
    KenBurnsContainer.prototype = Object.create(View.prototype);
    KenBurnsContainer.prototype.constructor = KenBurnsContainer;

    KenBurnsContainer.DEFAULT_OPTIONS = {
        duration: 10000,            // default duration for panAndZoom()
        delay: 5000,                // default delay for delay()
        modifier: {
            origin: [0.5, 0.5],
            align: [0.5, 0.5]
        },
        easeIn: 0.05,
        easeOut: 0.95
    };

    /**
     * Add renderables to this object's render tree
     *
     * @method add
     *
     * @param {Object} obj renderable object
     * @return {RenderNode} RenderNode wrapping this object, if not already a RenderNode
     */
    KenBurnsContainer.prototype.add = function add() {
        return this._renderable.add.apply(this._renderable, arguments);
    };

    /**
     * Halts the animation effect.
     */
    KenBurnsContainer.prototype.halt = function halt() {
        this.modifier.halt();
    };

    /**
     * Checks whether the effect is active.
     */
    KenBurnsContainer.prototype.isActive = function isActive() {
        this.modifier._transformState.isActive();
    };

    function _easeInOut(t, v) {
        if (v === undefined) {
            v = t;
        }

        //v *= Math.sin((Math.PI / 180) * (t * 90));



        /*if (t < this.options.easeIn) {
            //v *= Easing.inOutQuad(t * (1 / this.options.easeIn));
        }
        else if (t > this.options.easeOut) {
            //v *= Easing.outQuad(t * (1 / (1 - this.options.easeOut)));
            //v *= Easing.inOutQuad((t - this.options.easeOut) * (1 / (1 - this.options.easeOut)));
        }*/
        return v;
    }

    /**
     * Adjust the panning speed when also zooming.
     */
    function _zoomDependentPanningCurve(zoomDiff, distance, t) {
        /*if (!diff) {
            return _easeInOut.call(this, t, t);
        }*/
        //return Math.pow(t, 1 / Math.exp(zoomDiff * distance));
        return Easing.inOutSine(t);

        /*var result;
        if (zoomDiff < 0) {
            result = Math.pow(t, Math.abs(zoomDiff) + 1);
        }
        else {
            result = Math.pow(t, 1 / Math.exp(zoomDiff +));
        }
        return _easeInOut.call(this, t, result);*/
    }

    /**
     * Pan and zoom like the master Ken Burns.
     */
    KenBurnsContainer.prototype.panAndZoom = function(position, zoomScale, duration, callback) {
        var oldPosition = this._newPosition;
        this._newPosition = position || this._newPosition;
        var oldZoomScale = this._newZoomScale;
        this._newZoomScale = zoomScale || this._newZoomScale;
        var zoomTransition = {
            duration: duration || this.options.duration,
            curve: Easing.inOutSine
        };
        var zoomDiff = this._newZoomScale - oldZoomScale;
        var distance = Math.abs(Math.sqrt(Math.exp(oldPosition[0] - this._newPosition[0]) + Math.exp(oldPosition[1] - this._newPosition[1])));
        this.modifier.setTransform(Transform.scale(this._newZoomScale, this._newZoomScale, 1), zoomTransition, callback);
        var panTransition = {
            duration: duration || this.options.duration,
            curve: _zoomDependentPanningCurve.bind(this, zoomDiff, distance)
        };
        this.modifier.setOrigin(this._newPosition, panTransition);
        this.modifier.setAlign(this._newPosition, panTransition);
    };

    /**
     * Waits for a certain amount of time
     */
    KenBurnsContainer.prototype.delay = function(duration, callback) {
        if (!duration) {
            return;
        }
        this.panAndZoom(null, null, duration, callback);
    };

    module.exports = KenBurnsContainer;
});
