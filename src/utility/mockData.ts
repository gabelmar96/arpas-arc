import { ContentTypesData } from "../types/contentTypesData";
import { SceneData } from "../types/objectData";
import { TopicData } from "../types/topicData";

// thanks gpt

export const ContentTypes : ContentTypesData = {
    variant_content_type_id: 74,
    comments_content_type_id: 122,
};

export const AlgaeScene: SceneData = {
    id: 4,
    object_id: 404,
    content_type: 102,
    objects: [
        {
            id: 1,
            name: "Photobioreactor",
            coordinates: [import.meta.env.VITE_DEFAULT_LAT ?? 0, import.meta.env.VITE_DEFAULT_LONG ?? 0, 0],
            qr_id: "wooden_bench_1",
            comments: [
                {
                    id: 1,
                    username: "natureFan42",
                    isModerator: false,
                    timestamp: 1716100000000,
                    likes: 12,
                    isLiked: true,
                    dislikes: 0,
                    isDisliked: false,
                    text: "This photobioreactor setup looks really efficient! The light distribution seems uniform, which should boost algal growth rates significantly. Curious to know what strain of algae you’re cultivating.",
                    replies: [
                        {
                            id: 2,
                            commentId: 1,
                            username: "urbanExplorer",
                            isModerator: false,
                            timestamp: 1716103600000,
                            likes: 3,
                            isLiked: true,
                            dislikes: 0,
                            isDisliked: false,
                            text: "Totally agree! I've heard they grow sea lettuce in it.",
                        }
                    ]
                },
                {
                    id: 3,
                    username: "benchCritic",
                    isModerator: false,
                    timestamp: 1716110000000,
                    likes: 1,
                    isLiked: false,
                    dislikes: 5,
                    isDisliked: false,
                    text: "Great design - Have you monitored CO₂ utilization yet? It’d be interesting to see how it compares to traditional open-pond systems.",
                    replies: []
                }
            ],
            variants: [
                {
                    id: 0,
                    name: "PBR 1",
                    description: "A laboratory-scale photobioreactor system used for cultivating macroalgae. It allows precise control over environmental parameters such as light intensity, temperature, pH, and gas composition. The enclosed glass container, combined with integrated sensors and aeration lines, enable researchers to optimize conditions for algal growth and productivity.",
                    mesh_id: "food4future/pbr.glb",
                    mesh_url: null,
                    offset_position: [0, 0, 0],
                    offset_rotation: [0, 0, 0],
                    offset_scale: [1, 1, 1],
                    weight: 0,
                    likes: 42,
                    isLiked: true,
                    dislikes: 4,
                    isDisliked: false
                }
            ]
        },
        {
            id: 2,
            name: "Experimental Setups",
            coordinates: [import.meta.env.VITE_DEFAULT_LAT ?? 0, import.meta.env.VITE_DEFAULT_LONG ?? 0, 0],
            qr_id: "metal_bench_1",
            comments: [
                {
                    id: 4,
                    username: "metalLover",
                    isModerator: false,
                    timestamp: 1716120000000,
                    likes: 7,
                    isLiked: true,
                    dislikes: 1,
                    isDisliked: false,
                    text: "This spray culture system design is really innovative! The fine misting should improve nutrient delivery and oxygen transfer for faster growth.",
                    replies: [
                        {
                            id: 5,
                            commentId: 4,
                            username: "greenPeace",
                            isModerator: true,
                            timestamp: 1716123600000,
                            likes: 2,
                            isLiked: false,
                            dislikes: 0,
                            isDisliked: true,
                            text: "It’s a clever setup, but I’m skeptical about scalability. Maintaining uniform spray coverage and environmental control could become difficult in larger reactors.",
                        }
                    ]
                }
            ],
            variants: [
                {
                    id: 0,
                    name: "Spray Culture System",
                    description: "This spray culture system is an experimental setup designed to study algal growth under mist-based conditions. It uses fine nozzles to spray nutrient-rich droplets onto the culture surface, promoting efficient gas exchange and reduced water use.",
                    mesh_id: "food4future/sprayculture.glb",
                    mesh_url: null,
                    offset_position: [3, 0, 0],
                    offset_rotation: [0, 0, 0],
                    offset_scale: [1, 1, 1],
                    weight: 0,
                    likes: 11,
                    isLiked: false,
                    dislikes: 2,
                    isDisliked: false
                },
                {
                    id: 0,
                    name: "Flat-panel Bioreactor",
                    description: "This flat panel system is an experimental photobioreactor designed for controlled algal cultivation. It consists of thin, transparent panels that allow uniform light exposure and efficient gas exchange across the culture.",
                    mesh_id: "food4future/flatpanel.glb",
                    mesh_url: null,
                    offset_position: [5, 0, 0],
                    offset_rotation: [0, 0, 0],
                    offset_scale: [1, 1, 1],
                    weight: 0,
                    likes: 11,
                    isLiked: false,
                    dislikes: 2,
                    isDisliked: false
                }
            ]
        }
    ]
};

export const BenchScene: SceneData = {
    id: 4,
    object_id: 404,
    content_type: 102,
    objects: [
        {
            id: 1,
            name: "Wooden Bench",
            coordinates: [import.meta.env.VITE_DEFAULT_LAT ?? 0, import.meta.env.VITE_DEFAULT_LONG ?? 0, 0],
            qr_id: "wooden_bench_1",
            comments: [
                {
                    id: 1,
                    username: "natureFan42",
                    isModerator: false,
                    timestamp: 1716100000000,
                    likes: 12,
                    isLiked: true,
                    dislikes: 0,
                    isDisliked: false,
                    text: "This wooden bench is perfect for relaxing under the trees. I love its natural look!",
                    replies: [
                        {
                            id: 2,
                            commentId: 1,
                            username: "urbanExplorer",
                            isModerator: false,
                            timestamp: 1716103600000,
                            likes: 3,
                            isLiked: true,
                            dislikes: 0,
                            isDisliked: false,
                            text: "Totally agree! Adds a nice touch of nature to the cityscape.",
                        }
                    ]
                },
                {
                    id: 3,
                    username: "benchCritic",
                    isModerator: false,
                    timestamp: 1716110000000,
                    likes: 1,
                    isLiked: false,
                    dislikes: 5,
                    isDisliked: false,
                    text: "Not a fan of the untreated wood—looks like it won’t last long outdoors.",
                    replies: []
                }
            ],
            variants: [
                {
                    id: 0,
                    name: "Var 1",
                    description: "A plain wooden bench with a natural wood texture. The surface is untreated, showcasing the raw grain and organic color variations of the timber. Ideal for rustic or traditional outdoor settings.",
                    mesh_id: "test/bench/bench.glb",
                    mesh_url: null,
                    offset_position: [50, 0, 0],
                    offset_rotation: [0, -90, 0],
                    offset_scale: [1, 1, 1],
                    weight: 0,
                    likes: 42,
                    isLiked: true,
                    dislikes: 4,
                    isDisliked: false
                }
            ]
        },
        {
            id: 2,
            name: "Metal Bench",
            coordinates: [import.meta.env.VITE_DEFAULT_LAT ?? 0, import.meta.env.VITE_DEFAULT_LONG ?? 0, 0],
            qr_id: "metal_bench_1",
            comments: [
                {
                    id: 4,
                    username: "metalLover",
                    isModerator: false,
                    timestamp: 1716120000000,
                    likes: 7,
                    isLiked: true,
                    dislikes: 1,
                    isDisliked: false,
                    text: "Love the industrial feel of this metal bench—very sturdy and stylish.",
                    replies: [
                        {
                            id: 5,
                            commentId: 4,
                            username: "greenPeace",
                            isModerator: true,
                            timestamp: 1716123600000,
                            likes: 2,
                            isLiked: false,
                            dislikes: 0,
                            isDisliked: true,
                            text: "Glad it’s painted green—it blends in better with the environment.",
                        }
                    ]
                }
            ],
            variants: [
                {
                    id: 0,
                    name: "Green Painted",
                    description: "A durable metal bench coated with a dark green paint finish. Designed to blend well with park and garden surroundings while providing excellent resistance to rust and environmental wear.",
                    mesh_id: "republica/Stop1 Fabmobil/billboard.glb",
                    mesh_url: null,
                    offset_position: [0, 0, 0],
                    offset_rotation: [0, 180, 0],
                    offset_scale: [5, 5, 5],
                    weight: 0,
                    likes: 11,
                    isLiked: false,
                    dislikes: 2,
                    isDisliked: false
                }
            ]
        }
    ]
};

export const BenchTopic: TopicData = {
    id: 404,
    slug: "topic-404",
    name: "Topic #404",
    description: "<figure class=\"image\"><img style=\"aspect-ratio:4000/6000;\" src=\"/media/uploads/admin/2025/05/20/shai-pal-0sPzcUzpEds-unsplash.jpg\" alt=\"Park benches in a sunny park\" width=\"4000\" height=\"6000\"></figure><p><i>Explore and give feedback on new park bench designs in your neighborhood using Augmented Reality. Your opinion matters for future public spaces!</i>&nbsp;</p>",
    category: "Public Space Development",
    labels: [
        "AR Feedback",
        "Urban Furniture",
        "Community Participation",
        "Local Parks"
    ],
    module: 1,
    created: "2025-05-21T11:00:00.000000+02:00"
}
