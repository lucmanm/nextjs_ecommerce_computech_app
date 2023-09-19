import { create } from 'zustand';

import { Product } from '@/types/table-types';

interface PreviewModalStore {
    isOpen: boolean;
    productData?: Product;
    onOpen: (productData: Product) => void;
    onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
    isOpen: false,
    productData: undefined,
    onOpen: (productData: Product) => set({ isOpen: true, productData }),
    onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;