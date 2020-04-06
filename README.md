# FV-1 Program Directory

View the directory here: [https://mstratman.github.io/fv1-programs/](https://mstratman.github.io/fv1-programs/)

## Overview

This repository contains a collection of programs (or patches) for the
[Spin Semiconductor FV-1 IC](http://spinsemi.com/products.html). The goal is to be an open, community-driven
resource containing the most comprehensive list programs for DIY guitar pedal builders. 

## Background

The FV-1 is an incredible IC (integrated circuit) with a DSP (digital signal processing) core that is used at the heart of many popular guitar pedals for effects such as reverb, delay, chorus, and more. It is used by hobbyists and pedal manufacturers alike.  It's also used in mixers, amplifiers, karaoke machines, and more.

Until now, finding programs to use or study meant either relying on the precious few that Spin provides, or scrounging through hundreds of threads in discussion forums, and various other disparate sources, all the while trying to determine if they even work. I hope this project helps other guitar pedal builders find the tones they're looking for, and inspiration to create even more great programs.

## Contributing

The simplest way to help out is to send an [email to the maintainer](stratman@gmail.com) of this
repository with any additional programs you'd like to add, or with commentary, corrections, or other information to add to the page.

This is an open source project, so you are welcome and encouraged to dive deeper as well.  Clone this repository and follow the "Build Setup" below and you can have your own working copy of the site to tinker around with.

I also welcome and encourage pull requests of any kind, but particularly to the `programs.js` file which contains the list of all FV-1 programs on the site.

## programs.js File Format

The `programs.js` file contains the list of all FV-1 programs, and is
structured as follows:

```js
export default [
  {
    name: "Flange Verb", // Required
    description: "A Hall reverb, with a bit of flanger. Based on the internal ROM program, with a few tweaks.",
    author: "Blah Blah",
    author_url: "mailto:blah@example.com", // Or a regular web link
    categories: ["Flanger", "Reverb"], // Required, at least 1
    download: { // Required
      spn: { // or "spbk" or "spcd"
        // Either file or url. You don't need both.
        file: "flange_verb.spn",
      }
    },
    source_url: "https://example.com/thread1", // Where did you find this, particularly if there is discussion about it
    special_pcb: false,
    schematic_file: "schematic_abc.png",
    // Optional. Commentary lets us add longer descriptions than the "description" field,
    // and allows others to submit comments about patches, as time goes on.
    commentary: [
      {
        written_by: "Mark S",
        comments: { text: "This doesn't work well with guitar" }
      },
      { written_by: "Somebody else", comments: { text: "This is the funkiest Flanger ever" } },
    ],
    // You'll generaally omit this. We assume it's a guitar pedal, unless this is set to something else
    application: "mixer",
    controls: [ "Time", "Dwell", "Feedback" ],
  }
]
```

* **name**: *required*. The name of the program
* **description**: A one-line description of the program
* **author**: The name of the author
* **author_url**: e.g. "mailto:foo@example.com" or "https://example.com"
* **categories**: *required*. An array of effect types. This can be anything, but try to re-use others that already exist in the file (e.g. don't have "vibe" and "vibrato" if you don't really need to)
* **download**: *required*. An object containing one or more of these:
  * **spn** - SpinASM text assembly file
    * **file** is preferred, and is the filename (e.g. "somefile.spn") of the program as it exists in the `files` directory of this respository
    * **url** should be avoided if possible, but exists in case somebody wants to distribute their program but doesn't want to freely distribute its source on this site. The UI should eventually allow viewers to filter these out easily.
  * **spbk** - SpinCAD bank. Also has `file` or `url`. If possible, export a `.spn` SpinASM file and include that as well.
  * **spcd** - SpinCAD file. Also has `file` or `url`. If possible, export a `.spn` SpinASM file and include that as well.
* **source_url**: Where did it come from? e.g. a forum thread URL
* **special_pcb**: Boolean. Default false. If `false` we assume the program will work with the "Typical Application" circuit in the [FV-1 datasheet](http://www.spinsemi.com/Products/datasheets/spn1001/FV-1.pdf).
* **schematic_file**: If this requires a custom PCB, the schematic should be included in the `files` directory and its filename used here (if possible).
* **commentary**: An array of objects with "written_by" and "comments" keys.  This allows anyone to interject their experiences, recommendations, or other thoughts into the site.
  * **written_by** The name of the person who said this
  * **comments** Object with either "text" ~~or "html"~~
    * **text** A string with the comments they want to share. You can use backticks (ES6 template literal) to quote this, to make it easier to paste multi-line comments.
    * ~~**html** Raw HTML, e.g. if you need to include links. Be careful with this.~~ We are not currently supporting this, as it causes issues with Nuxt SSR
* **controls** array of 1-3 labels for the pot controls.

## Directory structure

Or rather, here are the notable files you're most likely to be looking for:

* **programs.js** - the most important file, see the description of it above
* **static/files/** - this directory contains all the downloadable .spn files referenced from the `entry.download.file` field in the `programs.js`
* **pages/index.vue** - the main page
* **app.html** - global site template
* **assets/css/app.scss** - global styles, useful on any page
* *everything else* for the most part is [Nuxt.js](https://nuxtjs.org/) boilerplate

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run dev

# generate static project
npm run generate
```

Upgrading:

```bash
npm install -g npm-check-updates # FIRST TIME ONLY
ncu
ncu -u
npm install

# Now TEST that everything still works correctly
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
