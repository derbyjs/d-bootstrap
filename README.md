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

###Nav

In your view:
<!-- general navigation -->
    <boot:nav current={currentTab} type="tabs">
      <boot:tab_pane title="Overview">
        <h3>Product Overview</h3>
        ...
      </boot:tab_pane>
      <boot:tab_pane title="Details">
        <h3>Details</h3>
        <ul>
          <li>20% stronger</li>
          <li>50% faster than other leading brands.</li>
       </ul>
      </boot:tab_pane>
    </boot:nav>
    <boot:nav type="pills">
      <boot:link state="disabled" header="true">link1</boot:link>
      <boot:link>link2</boot:link>
    </boot:nav>
    <boot:nav type="list">
      <boot:link state="disabled" header="true">link1</boot:link>
      <boot:link_header>another header</boot:link_header>
      <boot:link>link2</boot:link>
      <boot:link_divider/>
    </boot:nav>
    <boot:nav type="breadcrumb">
    </boot:nav>
    <boot:nav type="pages">
      <boot:page x-bind-load="loadPage">
      something dynamic, changes with loadPage
      </boot:page>
      <boot:page>
      second page, dont know yet how to template dynamic content
      </boot:page>
    </boot>
    <boot:thumbnails>
      <boot:thumbnail cell_size="2" data_src="some.image" alt="some image">caption</boot:thumbnail>
      <boot:thumbnail cell_size="4" data_src="other.image" alt="other image" label="another image">more descriptive catpion</boot:thumbnail>
    </boot:thumbnails>
    <boot:hero headline="headline" tagline="tagline">more?</boot:hero>
    <boot:page_header headline="headline" subtext="subtext"/>
    <boot:alert>message</boot>
    <boot:alert type="info">something readworthy</boot:alert>

#### parameters

nav type==tab
align left|right

tab_pane [title,header]
name: use for consistent naming and accessing link later
disabled: bool

link
disabled: bool
header: bool

nav type==form, search
align left|right

nav type==form, search

nav type==pages

page
name: use for consistent naming and accessing link later
disabled: bool

alert
type: [|error|success|info] empty=warning



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