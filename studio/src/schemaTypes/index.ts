import blockContent from './objects/blockContent'
import seo from './objects/seo'
import post from './documents/post'
import service from './documents/service'
import { feedback } from './documents/feedback' // Fixed: Added curly braces
import {product} from './documents/product'
import about from './documents/about'
import faq from './documents/faq'
import gallery from './documents/gallery'
import story from './documents/story'
import { mapType } from './documents/mapType'

export const schemaTypes = [post, story, service, blockContent, seo, feedback, product, about, faq, gallery, mapType]