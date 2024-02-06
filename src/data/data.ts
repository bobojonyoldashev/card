interface IDateType {
    id: number;
    color: string;
    price: string;
    aksiya: number;
    count: number;
    img: string;
}

export interface IData {
    id: number;
    text: string;
    img: string;
    type: IDateType[];
}

export const data: IData[] = [
    {
        id: 1,
        text: "Bolalar uchun yumshoq o'yinchog'i, Lilo va Stitch sovg'a uchun, moviy va pushti ranglar",
        img: "https://w7.pngwing.com/pngs/357/487/png-transparent-lilo-stitch-lilo-pelekai-christmas-drawing-stitch-disney-mammal-holidays-vertebrate-thumbnail.png",
        type: [
            {
                id: 1,
                color: "Sariq",
                price: "599999",
                aksiya: 20,
                count: 4,
                img: "https://w7.pngwing.com/pngs/696/761/png-transparent-stitch-lilo-pelekai-drawing-stitch-miscellaneous-mammal-carnivoran-thumbnail.png",
            },
            {
                id: 2,
                color: "Pushti",
                price: "499999",
                aksiya: 15,
                count: 12,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcMFhP5jgRDE6J1FYYZGhSBcav5BaMky5F7CQA0Ko6La-AdXJaSVS-EDaf5DfhUIVPbOI&usqp=CAU",
            },
            {
                id: 3,
                color: "Qizil",
                price: "799999",
                aksiya: 25,
                count: 2,
                img: "https://w7.pngwing.com/pngs/867/763/png-transparent-pink-stich-character-graphic-lilo-stitch-lilo-pelekai-drawing-stitch-miscellaneous-purple-mammal-thumbnail.png",
            },
        ],
    },
];
