import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'portraits',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'Portraits',
    credits: 'LOCAL PROJECT TEAMS',
    chip: {
      item: 'ed505641-7fab-598f-a27b-c58fb38cc49e',
      project: 'Discover Islamic Art',
      className: 'mwnf-chip--ISLandEPM',
    },
    noticeItem: '2f2d6f96-e497-5489-ae20-7c7ca9950d9b',
    dynasty: {
      item: '7ab5bd97-3948-5e4a-9db2-309afc5b078e',
      name: 'Ottomans',
    },
    timeline: {
      code: 'at',
      id: 'aut',
      country: 'Austria',
    },
    partner: {
      id: '70c67f69-48f3-55ab-abd2-0e678dca303b',
      name: 'National Museum of Contemporary Art – Chiado Museum',
      city: 'Lisbon',
      country: 'Portugal',
      objects: 2,
    },
  },
})
