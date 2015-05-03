/**
 * This Source Code is licensed under the MIT license. If a copy of the
 * MIT-license was not distributed with this file, You can obtain one at:
 * http://opensource.org/licenses/mit-license.html.
 *
 * @author: Hein Rutjes (IjzerenHein)
 * @license MIT
 * @copyright Gloey Apps, 2014/2015
 */

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
     * @param {Number} options.duration Default duration in msec for `panAndZoom` (default: 10000)
     * @param {Number} options.delay Default duration in msec for `delay` (default: 1000)
     * @param {Object} options.modifier Options that are passed to the internal `StateModifier`
     * @param {Object} options.containerSurface Options that are passed to the internal `ContainerSurface`
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
        duration: 10000,             // default duration for panAndZoom()
        delay: 1000,                 // default delay for delay()
        modifier: {
            origin: [0.5, 0.5],      // start position
            align: [0.5, 0.5]        // start position
        },
        containerSurface: {
            properties: {
                overflow: 'hidden'   // clip content inside container
            }
        }
    };

    /**
     * Add renderables to this object's render tree
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
     *
     * @return {Boolean} Active-state
     */
    KenBurnsContainer.prototype.isActive = function isActive() {
        this.modifier._transformState.isActive();
    };

    /**
     * Pans and/or zooms the child renderables with the ken burns effect.
     *
     * @param {Array.Number} [position] Position in relative coordinates (see origin/align)
     * @param {Number} [zoomScale] Scale-factor to use for zooming
     * @param {Number} [duration] Duration in milliseconds (when omitted `options.duration` is used)
     * @param {Function} [callback] Function to call upon completion
     */
    KenBurnsContainer.prototype.panAndZoom = function(position, zoomScale, duration, callback) {
        this._newPosition = position || this._newPosition;
        this._newZoomScale = zoomScale || this._newZoomScale;
        var zoomTransition = {
            duration: duration || this.options.duration,
            curve: Easing.inOutSine
        };
        this.modifier.setTransform(Transform.scale(this._newZoomScale, this._newZoomScale, 1), zoomTransition, callback);
        var panTransition = {
            duration: duration || this.options.duration,
            curve: Easing.inOutSine
        };
        this.modifier.setOrigin(this._newPosition, panTransition);
        this.modifier.setAlign(this._newPosition, panTransition);
    };

    /**
     * Waits for a certain amount of time.
     *
     * @param {Number} [duration] Duration in milliseconds (when omitted `options.delay` is used)
     * @param {Function} [callback] Function to call upon completion
     */
    KenBurnsContainer.prototype.delay = function(duration, callback) {
        duration = duration || this.options.delay;
        if (!duration) {
            return;
        }
        this.panAndZoom(null, null, duration, callback);
    };

    module.exports = KenBurnsContainer;
});
