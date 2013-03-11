# Derby Boot

A Derby component library based on Twitter Bootstrap.

##Installation


In your project root:

    npm install derby-ui-boot
  
##Usage

In `lib/app/js` add: 

    derby.use(require('derby-ui-boot'))

Bootstrap is now being rendered with your page.

###Add a Catchy Bootstrap-Style Title-Block to your Home Page

In `lib/app/index.js`, for your root route:

    get('/', function(page, model, params) {
      page.render({
        home: true
      });
    });

In `views/app/index.html`:

    {#if home}
      <div class="container-fluid">
        <div class="row-fluid">
          <div class="span12">
            <div class="hero-unit">
              <h1>Hello World! <small>Welcome to my Great new Derby App!</small></h1>
            </div>
          </div>
        </div>
      </div>
    {/}

##Using Bootstrap JS: 

###Tabs

In your view:

    <boot:tabs current={currentTab}>
      <boot:tab title="Overview">
        <h3>Product Overview</h3>
        ...
      </boot:tab>
      <boot:tab title="Details">
        <h3>Details</h3>
        <ul>
          <li>20% stronger</li>
          <li>50% faster than other leading brands.</li>
       </ul>
      </boot:tab>
    </boot:tabs>

## MIT License
Copyright (c) 2011 by Nate Smith and Brian Noguchi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.