import { useFish } from './fish/FishDataProvider.js'
import { FishList } from './fish/FishList.js'
import { LocationList } from './locations/LocationList.js'
import { useTips } from './tips/TipDataProvider.js'
import { TipList } from './tips/TipList.js'
import { mostHolyFish } from './fish/FishDataProvider.js'
import { soldierFish } from './fish/FishDataProvider.js'
import { nonHolyFish } from './fish/FishDataProvider.js'
import { HolyFishList } from './fish/FishList.js'
import { SoldierFishList } from './fish/FishList.js'
import { PeasantFishList } from './fish/FishList.js'

const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}

FishList()
TipList()
LocationList()
HolyFishList()
SoldierFishList()
PeasantFishList()