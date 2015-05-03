<a name="module_KenBurnsContainer"></a>
## KenBurnsContainer
Ken burns effect for famo.us


* [KenBurnsContainer](#module_KenBurnsContainer)
  * [KenBurnsContainer](#exp_module_KenBurnsContainer--KenBurnsContainer) ⏏
    * [new KenBurnsContainer(options)](#new_module_KenBurnsContainer--KenBurnsContainer_new)
    * [.add(obj)](#module_KenBurnsContainer--KenBurnsContainer#add) ⇒ <code>RenderNode</code>
    * [.halt()](#module_KenBurnsContainer--KenBurnsContainer#halt)
    * [.isActive()](#module_KenBurnsContainer--KenBurnsContainer#isActive) ⇒ <code>Boolean</code>
    * [.panAndZoom([position], [zoomScale], [duration], [callback])](#module_KenBurnsContainer--KenBurnsContainer#panAndZoom)
    * [.delay([duration], [callback])](#module_KenBurnsContainer--KenBurnsContainer#delay)

<a name="exp_module_KenBurnsContainer--KenBurnsContainer"></a>
### KenBurnsContainer ⏏
**Kind**: Exported class  
<a name="new_module_KenBurnsContainer--KenBurnsContainer_new"></a>
#### new KenBurnsContainer(options)

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options. |
| options.duration | <code>Number</code> | Default duration in msec for `panAndZoom` (default: 10000) |
| options.delay | <code>Number</code> | Default duration in msec for `delay` (default: 1000) |
| options.modifier | <code>Object</code> | Options that are passed to the internal `StateModifier` |
| options.containerSurface | <code>Object</code> | Options that are passed to the internal `ContainerSurface` |

<a name="module_KenBurnsContainer--KenBurnsContainer#add"></a>
#### kenBurnsContainer.add(obj) ⇒ <code>RenderNode</code>
Add renderables to this object's render tree

**Kind**: instance method of <code>[KenBurnsContainer](#exp_module_KenBurnsContainer--KenBurnsContainer)</code>  
**Returns**: <code>RenderNode</code> - RenderNode wrapping this object, if not already a RenderNode  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | renderable object |

<a name="module_KenBurnsContainer--KenBurnsContainer#halt"></a>
#### kenBurnsContainer.halt()
Halts the animation effect.

**Kind**: instance method of <code>[KenBurnsContainer](#exp_module_KenBurnsContainer--KenBurnsContainer)</code>  
<a name="module_KenBurnsContainer--KenBurnsContainer#isActive"></a>
#### kenBurnsContainer.isActive() ⇒ <code>Boolean</code>
Checks whether the effect is active.

**Kind**: instance method of <code>[KenBurnsContainer](#exp_module_KenBurnsContainer--KenBurnsContainer)</code>  
**Returns**: <code>Boolean</code> - Active-state  
<a name="module_KenBurnsContainer--KenBurnsContainer#panAndZoom"></a>
#### kenBurnsContainer.panAndZoom([position], [zoomScale], [duration], [callback])
Pans and/or zooms the child renderables with the ken burns effect.

**Kind**: instance method of <code>[KenBurnsContainer](#exp_module_KenBurnsContainer--KenBurnsContainer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [position] | <code>Array.Number</code> | Position in relative coordinates (see origin/align) |
| [zoomScale] | <code>Number</code> | Scale-factor to use for zooming |
| [duration] | <code>Number</code> | Duration in milliseconds (when omitted `options.duration` is used) |
| [callback] | <code>function</code> | Function to call upon completion |

<a name="module_KenBurnsContainer--KenBurnsContainer#delay"></a>
#### kenBurnsContainer.delay([duration], [callback])
Waits for a certain amount of time.

**Kind**: instance method of <code>[KenBurnsContainer](#exp_module_KenBurnsContainer--KenBurnsContainer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [duration] | <code>Number</code> | Duration in milliseconds (when omitted `options.delay` is used) |
| [callback] | <code>function</code> | Function to call upon completion |

