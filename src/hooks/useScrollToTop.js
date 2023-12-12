export default function useScrollToTop(scrollToOptions) {
  window.scrollTo({ top: 0, left: 0, ...scrollToOptions });
}
