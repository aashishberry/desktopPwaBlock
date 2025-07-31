const observer = new MutationObserver(() => {
  const manifestLink = document.querySelector('link[rel="manifest"]');
  if (manifestLink) {
    manifestLink.remove();
    console.log("Found and deleted: ", manifestLink);
    observer.disconnect(); 
  }
})

observer.observe(
  document,
  {
    subtree: true, 
    childList: true 
  }
);