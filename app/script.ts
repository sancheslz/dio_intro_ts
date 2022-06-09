function time_it(label: string, fn: () => void): void {
    console.time(label);
    fn();
    console.timeEnd(label);
}


time_it('spam', () => console.log('spam'))