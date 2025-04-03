export interface FeatureItem {
    image: string;
    alt: string;
    text?: string;
}

export interface ServiceFeatures {
    shopCart: FeatureItem;
    timer: FeatureItem;
    package: FeatureItem;
    coffee: FeatureItem;
    bodyImage: FeatureItem;
}
