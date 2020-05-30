import Typography from "typography"
import grandViewTheme from "typography-theme-grand-view"
grandViewTheme.overrideStyles = () => ({
  'a': {
    color: '#68AEC7',
    fontSize: '20px',
  },
  'p': {
    fontSize: '20px',
  }
})

const typography = new Typography(grandViewTheme)

export default typography
export const rhythm = typography.rhythm