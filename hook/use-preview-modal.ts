import { create } from 'zustand';

import { TProduct } from '@/types/type';

interface PreviewModalStore {
    isOpen: boolean;
    productData?: TProduct;
    onOpenData: (productData: TProduct) => void;
    onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
    isOpen: false,
    productData: undefined,
    onOpenData: (productData: TProduct) => set({ isOpen: true, productData }),
    onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;