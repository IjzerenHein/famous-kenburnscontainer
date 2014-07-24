<a name="module_KenBurnsContainer"></a>
#KenBurnsContainer
Ken burns effect for famo.us

<a name="exp_module_KenBurnsContainer"></a>
##class: KenBurnsContainer ⏏
**Members**

* [class: KenBurnsContainer ⏏](#exp_module_KenBurnsContainer)
  * [new KenBurnsContainer(options)](#exp_new_module_KenBurnsContainer)
  * [kenBurnsContainer.add(obj)](#module_KenBurnsContainer#add)
  * [kenBurnsContainer.halt()](#module_KenBurnsContainer#halt)
  * [kenBurnsContainer.isActive()](#module_KenBurnsContainer#isActive)
  * [kenBurnsContainer.panAndZoom([position], [zoomScale], [duration], [callback])](#module_KenBurnsContainer#panAndZoom)
  * [kenBurnsContainer.delay([duration], [callback])](#module_KenBurnsContainer#delay)

<a name="exp_new_module_KenBurnsContainer"></a>
###new KenBurnsContainer(options)
**Params**

- options `Object` - Options.  
  - duration `Number` - Default duration in msec for `panAndZoom` (default: 10000)  
  - delay `Number` - Default duration in msec for `delay` (default: 1000)  
  - modifier `Object` - Options that are passed to the internal `StateModifier`  
  - containerSurface `Object` - Options that are passed to the internal `ContainerSurface`  

<a name="module_KenBurnsContainer#add"></a>
###kenBurnsContainer.add(obj)
Add renderables to this object's render tree

**Params**

- obj `Object` - renderable object  

**Returns**: `RenderNode` - RenderNode wrapping this object, if not already a RenderNode  
<a name="module_KenBurnsContainer#halt"></a>
###kenBurnsContainer.halt()
Halts the animation effect.

<a name="module_KenBurnsContainer#isActive"></a>
###kenBurnsContainer.isActive()
Checks whether the effect is active.

**Returns**: `Boolean` - Active-state  
<a name="module_KenBurnsContainer#panAndZoom"></a>
###kenBurnsContainer.panAndZoom([position], [zoomScale], [duration], [callback])
Pans and/or zooms the child renderables with the ken burns effect.

**Params**

- \[position\] `Array.Number` - Position in relative coordinates (see origin/align)  
- \[zoomScale\] `Number` - Scale-factor to use for zooming  
- \[duration\] `Number` - Duration in milliseconds (when omitted `options.duration` is used)  
- \[callback\] `function` - Function to call upon completion  

<a name="module_KenBurnsContainer#delay"></a>
###kenBurnsContainer.delay([duration], [callback])
Waits for a certain amount of time.

**Params**

- \[duration\] `Number` - Duration in milliseconds (when omitted `options.delay` is used)  
- \[callback\] `function` - Function to call upon completion  

