# Server Side For Big Screen Interactions
## Structure 
Server will accept connections from two name spaces:
* /web-client 
    * This name space will handle all the socket transmissions regarding audience's mobile devices
* /unity-client
    * This name space will handle the connection from the big screen. 
## Events
* /web-client
    * **client-light-on**
        * When audience presses the key to turn on the light, this event will be triggered 
    * **client-light-dim** 
        * When audience changes the dim slider, this event will be triggered
    * **light_on_scene** 
        * Server will release this event when the light on event is triggered in unity, audience will receive this event 
            and change the web-page content 
    * **light_dim_scene**
        * Server will release this event when the light dim event is triggered in unity, audience will receive this event 
            and change the web-page content 
* /unity-client
    * **start-light-on**
        * Server will receive this event when light on scene is triggered in Unity
    * **start-light-dim**
        * Server will receive this event when light dim scene is triggered in Unity
    * **light-on**
        * Server will send this event to Unity side when audience presses light on, so light will be triggered in Unity   
    * **light-dim**
        * Server will send this event to Unity side when audience changes the light intensity slider on webpage  
