import { create } from 'zustand';

import { TProduct } from '@/types/type';

interface PreviewModalStore {
    isOpen: boolean;
    productData?: TProduct;
    onOpen: (productData: TProduct) => void;
    onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
    isOpen: false,
    productData: undefined,
    onOpen: (productData: TProduct) => set({ isOpen: true, productData }),
    onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;