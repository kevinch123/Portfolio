import create from 'zustand';

const useNavbarStore = create((set) => ({
  navbarItemActive: 1,
  selectedItemNavbar: (navItem) => {
    set({ navbarItemActive: navItem });
  },
}));

export default useNavbarStore;
