<?php

namespace App\EventListener;

use App\Entity\Phase;
use App\Service\ImageHelper;
use Doctrine\Persistence\Event\LifecycleEventArgs;

class PreRemoveListener
{
    /** @var ImageHelper $imageHelper */
    public function __construct(ImageHelper $imageHelper)
    {
        $this->imageHelper = $imageHelper;
    }

    public function preRemove(LifecycleEventArgs $args): void
    {
        $entity = $args->getObject();

        if ($entity instanceof Phase) {
            $this->imageHelper->removeImage($entity->getImage());

            return;
        }
    }
}
