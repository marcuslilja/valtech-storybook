function getSize(size) {
  if (size === 'tiny') {
    return { width: '12', height: '12' };
  }

  return { width: '16', height: '16' };
}

export { getSize };
