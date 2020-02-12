<template>
  <div class="page-container">
    <github-corner />

    <div class="section-no-bg header">
      <h1 class="logo">FV-1 Programs</h1>
      <h2 class="subtitle">List of SpinASM code for guitar effects pedals and other applications</h2>
    </div>

    <div class="section intro">
      <h2>Introduction</h2>
      <p>The goal of this project is to be a comprehensive directory of patches, programs, or banks for the <a href="http://spinsemi.com/products.html" target="_blank">Spin Semiconductor FV-1 DSP integrated circuit (IC)</a> that can be used in DIY guitar effects pedals, and other hobbiest projects. It is community-driven and built entirely of contributions from people like you, so please submit any programs you'd like to share.</p>
      <p>This entire site is open source and <a target="_blank" href="https://github.com/mstratman/fv1-programs">hosted on GitHub</a></p>
      <div class="center-buttons">
        <button class="button-primary" @click="showContributeDialog()">Contribute Updates</button>
      </div>

      <h2>Circuit / PCB</h2>
      <p>Unless otherwise noted, all of these programs are assumed to work on the <a target="_blank" href="images/fv1-typical-application.png">"typical application"</a> circuit from the <a target="_blank" href="http://spinsemi.com/Products/datasheets/spn1001/FV-1.pdf">FV-1 datasheet</a>, and should also run fine on either the <strong><a target="_blank" href="pedal/">FV-1 platform pedal</a></strong>, or the <a target="_blank" href="https://www.pedalpcb.com/product/arachnid/">Arachnid board from PedalPCB</a>.</p>
      <!--
      <div class="center-buttons">
        <a class="button" target="_blank" href="pedal/">Get Platform Pedal</a>
      </div>
      -->
    </div>

    <div class="section">
      <h2>List of FV-1 Programs</h2>

      <div v-show="! show_filters" class="text-center">
        <small><a class="button" href="#" @click.prevent="show_filters = true">show filters</a></small>
      </div>
      <a id="filters"></a>
      <div v-show="show_filters" class="filters">
        <div class="text-center"><small><a href="#" @click.prevent="show_filters = false">[hide filters]</a></small></div>
        <h4>Filter by</h4>

        <label>Tags:</label>
        <div class="row">
          <div class="two columns">
            <select v-model="selected_categories_operator">
              <option value="any">any of</option>
              <option value="all">all of</option>
            </select>
          </div>
          <div class="ten columns">
            <multiselect
              v-model="selected_categories"
              :options="categories"
              :multiple="true"
              placeholder="Filter by tag"
            />
          </div>
        </div>

        <label>Application:</label>
        <multiselect
          v-model="selected_applications"
          track-by="id"
          label="label"
          :options="applications"
          :multiple="true"
          placeholder="Filter by application"
        />

        <div style="margin-top: 1rem;">
          <label>Special circuit:</label>
          <label>
            <input type="checkbox" v-model="hide_special_pcb">
            <span class="label-body">Exclude programs requiring a different PCB</span>
          </label>
        </div>

        <div v-show="visible_programs_length != all_programs_length" class="clear-form">
          <div class="summary">
            <p>
              showing {{visible_programs_length}} of {{all_programs_length}} programs
            </p>
            <div class="center-buttons">
              <button class="button" @click="clearFilters" :disabled="visible_programs_length == all_programs_length">Clear Filters</button>
            </div>
          </div>
        </div>
      </div>

      <div v-for="(p, i_p) in visible_programs" class="program-listing">
        <div class="row">
          <div class="six columns">
            <strong>{{p.name}}</strong>
          </div>
          <div class="three columns">
            <a  v-for="cat in p.categories" @click="filterCategory(cat)" href="#filters" class="tag">{{cat}}</a>
          </div>
          <div class="three columns d-none-mobile">
            <a :id="`more-button-desktop-${i_p}`" href="#" class="button" @click.prevent="showMore(i_p)">more...</a>
          </div>
        </div>


        <div class="row">
          <div class="one column d-none-mobile">&nbsp;</div>
          <div class="five columns">
            <span v-if="p.author" class="author">
              by
              <a v-if="p.author_url" :href="p.author_url" target="_blank">
                {{p.author}}
              </a>
              <template v-else>{{p.author}}</template>
            </span>
            &nbsp;
            <div v-if="p.commentary && p.commentary.length > 0" class="num-comments" @click="showMore(i_p)">
              <font-awesome-icon :icon="['fas', 'comment']" class="icon" />
              {{p.commentary.length}}
              comment<template v-if="p.commentary.length > 1">s</template>
            </div>
          </div>
          <div class="six columns">
            <div class="description">{{p.description}}&nbsp;</div>
            <div v-if="p.special_pcb" class="special-pcb">
              * Requires different circuit
              <a v-if="p.schematic_file" target="_blank" :href="`files/${p.schematic_file}`">(download)</a>
            </div>
          </div>
        </div>

        <div class="row d-block-mobile" :id="`more-button-mobile-${i_p}`">
          <div class="center-buttons">
            <a href="#" class="button" @click.prevent="showMore(i_p)">more...</a>
          </div>
        </div>

        <div :id="`more-${i_p}`" class="more" style="display:none">
          <div class="row">
            <div class="one column d-none-mobile">&nbsp;</div>
            <div class="eleven columns">
              <div v-if="p.source_url" class="source more-section">
                <strong>Sourced from:</strong>
                <a target="_blank" :href="p.source_url">{{p.source_url}}</a>
              </div>
              <div v-if="p.controls" class="controls more-section">
                <strong>Controls:</strong>
                <ol>
                  <li v-for="ctl in p.controls">{{ctl}}</li>
                </ol>
              </div>
              <div class="application more-section">
                <strong>Application: </strong>
                {{p.application || "Guitar"}}
              </div>
              <div class="commentary more-section">
                <strong>Comments:</strong>
                <span class="no-comments" v-if="p.commentary == undefined || p.commentary.length == 0">none yet</span>
                <div v-for="c in p.commentary" class="comment">
                  <div><span class="comment-author">{{c.written_by}}</span> says</div>
                  <div class="commentary-text">{{c.comments.text}}</div>
                </div>
              </div>
              <div class="contribute more-section">
                <strong><em>Have something to add?</em></strong> Corrections, additions, comments?
                <a href="#" @click.prevent="showContributeDialog(p.name)">Send an email or submit a pull request</a> to update this page.
              </div>
            </div>
          </div>

          <div class="center-buttons download-buttons">
            <a v-if="p.download.spn" class="button button-primary keep-case" target="_blank" :href="p.download.spn.url || `files/${p.download.spn.file}`">Download SpinASM</a>
            <a v-if="p.download.spbk" class="button button-primary keep-case" target="_blank" :href="p.download.spbk.url || `files/${p.download.spbk.file}`">Download SpinCAD Bank</a>
            <a v-if="p.download.spcd" class="button button-primary keep-case" target="_blank" :href="p.download.spcd.url || `files/${p.download.spcd.file}`">Download SpinCAD</a>
            <a v-if="p.download.hex" class="button button-primary keep-case" target="_blank" :href="p.download.hex.url || `files/${p.download.hex.file}`">Download Hex</a>
          </div>
        </div>

      </div>

      <div v-show="visible_programs_length != all_programs_length" class="filtered-notification">
        <div class="summary">
          <p>
            Results filtered: Showing <strong>{{visible_programs_length}}</strong> of <strong>{{all_programs_length}}</strong> programs
          </p>
          <div class="center-buttons">
            <button class="button" @click="clearFilters">Clear Filters</button>
          </div>
        </div>
      </div>
    </div>


    <div class="section">
      <h3>Questions, additions, corrections, feedback?</h3>
      <div class="center-buttons">
        <button class="button-primary" @click="showContributeDialog()">Let us know</button>
      </div>
    </div>

  </div>
</template>

<script>
import GithubCorner from '../components/GithubCorner.vue'
import all_programs from '../programs.js'

import Multiselect from 'vue-multiselect'
import "vue-multiselect/dist/vue-multiselect.min.css"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faComment)

export default {
  head: function() {
    return {
      title: 'FV-1 Programs',
      meta: [
        { hid: 'description', name: 'description', content: 'This project aims to be the comprehensive list of FV-1 programs for DIY guitar effects pedals and other hobby projects, and is an open, community-driven resource' },
      ]
    }
  },

  components: {
    Multiselect,
    GithubCorner,
    FontAwesomeIcon,
  },

  data: function() {

    let u_categories = {}
    let u_applications = {}

    // Collect all the unique category and application values
    for (let p of all_programs) {
      for (let c of p.categories) {
        u_categories[c] = 1
      }
      if (p.application) {
        u_applications[p.application] = 1
      }
    }

    // Now turn those into lists

    let categories = []
    for (let c in u_categories) {
      categories.push(c)
    }
    categories = categories.sort()

    // The programs.js allows you to omit `application` if it's intended to be "guitar"
    let applications = [
      { id: undefined, label: "Guitar" },
    ]
    for (let a in u_applications) {
      applications.push({id: a, label: a})
    }

    return {
      all_programs,

      show_filters: false,

      selected_categories: [], // preselect none. These are strings.
      selected_categories_operator: "any",
      categories,

      selected_applications: [], // preselected in `mounted`. These are objects with `id` and `label`
      applications,

      hide_special_pcb: false,
    }
  },

  mounted: function() {
    /* // Currenly showing you all programs by default, but not yet sure if that's a good idea.
     * this.selected_applications = this.applications.filter(a => a.id == undefined || a.id == "Guitar amplifier")
     */
  },

  watch: {
    selected_categories: function(newA, oldA) {
      if (newA.length > 0) {
        this.show_filters = true
      }
      if (this.show_filters == true && newA.length == 0 && this.selected_applications.length == 0) {
        this.show_filters = false
      }
    },
    selected_applications: function(newA, oldA) {
      if (newA.length > 0) {
        this.show_filters = true
      }
      if (this.show_filters == true && newA.length == 0 && this.selected_categories.length == 0) {
        this.show_filters = false
      }
    },
  },

  computed: {
    is_filtered: function() {
      return this.selected_categories.length > 0 || this.selected_applications.length > 0
    },
    visible_programs: function() {
      /* NOTE: This could be optimized to use only a single pass of the list.
       *       Keep an eye out for whether it's necessary.
       */

      let rv = this.all_programs

      if (this.selected_categories.length > 0) {
        if (this.selected_categories_operator == "all") {
          rv = rv.filter((p) => {
            let program_has_selected = p.categories.filter((cat) =>  {
              return -1 !== this.selected_categories.indexOf(cat)
            })
            return this.selected_categories.length == program_has_selected.length
          })
        } else {
          rv = rv.filter((p) => {
            return undefined !== p.categories.find((cat) =>  {
              return -1 !== this.selected_categories.indexOf(cat)
            })
          })
        }
      }

      if (this.selected_applications.length > 0) {
        rv = rv.filter((p) => {
          return undefined !== this.selected_applications.find((app) => p.application == app.id)
        })
      }

      if (this.hide_special_pcb) {
        rv = rv.filter(p => ! p.special_pcb)
      }

      return rv
    },

    all_programs_length: function() { return this.all_programs.length },
    visible_programs_length: function() { return this.visible_programs.length },
  },

  methods: {
    showContributeDialog: function(program='') {
      let subject = "FV-1%20contribution"
      if (program) {
        subject = subject + "%20-%20" + program
      }
      this.$swal({
        title: "Contributing",
        icon: "info",
        html: `<p>If you have any new programs to add, or recommend any changes or corrections, it would be greatly appreciated.</p><p>The easiest way to contribute is to simply <a href="mailto:stratman@gmail.com?subject=${subject}">email Mark, the maintainer of this project</a>.<p>If you are more technically savvy, you can also <a href="https://github.com/mstratman/fv1-programs" target="_blank">submit a pull request on the github project</a>.`,
      })
    },
    clearFilters: function() {
      this.selected_categories = []
    },
    filterCategory: function(cat) {
      if (-1 == this.selected_categories.indexOf(cat)) {
        this.selected_categories.push(cat)
        this.$toasted.show("Filtering by: " + cat, {
          theme: "bubble",
          position: "top-center",
          duration : 5000,
          fullWidth: true,
          className: "blue-toasted-bubble",
        })
      }
    },
    /*
     * Note: We could have used vue data variables (e.g. a keyed object) to keep track of
     * which "more" boxes are shown or hidden. But this can cause performance issues
     * as the list gets longer for less powerful devices.
     * Instead we'll just manipulate the 'display' properties of the buttons and 'more' block
     * based on id (keyed on index)
     */
    showMore: function(i) {
      let b1 = document.getElementById(`more-button-desktop-${i}`)
      let b2 = document.getElementById(`more-button-mobile-${i}`)
      b1.style.display = "none"
      b2.style.display = "none"

      let more = document.getElementById(`more-${i}`)
      more.style.display = "block"
    },
  },
}
</script>

<style lang="scss">
  /* Be sure to also see assets/css/app.scss and static/css/ */

  /* vue-multiselect collapses the input, but its border is still visible. This is a workaround. */
  input.multiselect__input {
    border: 0px !important;
  }

  .center-buttons {
    display: flex; justify-content: center;
  }

  .blue-toasted-bubble {
    background-color: #03769E !important;
  }

  .summary {
    p {
      text-align: center;
      margin: 0;
    }
  }

  .intro {
    h2 {
      font-size: 2rem;
    }
    p:last-child {
      margin-bottom: 0px;
    }
  }

  .filters {
    background-color: #e3e3e3;
    padding: 2rem;
    select {
      font-size: 1rem;
    }
  }

  .program-listing {
    padding-bottom: 1.5rem;
    margin-top: 1.5rem;
    border-bottom: thin solid #E1E1E1;

    .button {
      margin-bottom: 0;
    }

    .tag {
      font-size: 1.3rem;
      margin-right: 0.8rem;
      display: block;
    }

    .author {
    }

    .description {
      font-style: italic;
    }

    .special-pcb {
      color: red;
    }

    .download-buttons {
      a, input, button {
        margin-right: 2px;
        margin-left: 2px;
      }
    }

    .num-comments {
      color: #8c8c8c;
      font-size: 1.2rem;
      cursor: pointer;
      .icon {
        font-size: 1.8rem;
        color: #00ba73;
        margin-right: 0.8rem;
      }
    }

    .more-section {
      margin-top: 1rem;
      margin-bottom: 2rem;
    }
    .more {
      .source {
        a { font-size: 1.2rem; }
      }
      .controls {
        ol, ul {
          li {
            line-height: 1.2;
          }
          margin-left: 3rem;
        }
      }
      .commentary {
        .comment {
          margin-left: 3rem;
          margin-bottom: 1rem;
          border-left: 3px solid #E1E1E1;
          font-size: 1.3rem;
          padding-left: 2rem;
        }
        .comment-author {
          font-weight: bold;
          font-style: italic;
        }
        .no-comments {
          font-style: italic;
          font-size: 1rem;
        }
        .commentary-text {
          white-space: pre-wrap;
          margin-left: 2rem;
        }
      }
      .contribute {
        font-size: 1rem;
      }
    }
  }
</style>
