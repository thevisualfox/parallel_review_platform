<?php

namespace App\Entity;

use App\Repository\PhaseRepository;
use App\Service\ImageHelper;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PhaseRepository::class)
 */
class Phase
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $phase;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $image;

    /**
     * @ORM\ManyToOne(targetEntity=ProjectImage::class, inversedBy="phases")
     */
    private $projectImage;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPhase(): ?int
    {
        return $this->phase;
    }

    public function setPhase(int $phase): self
    {
        $this->phase = $phase;

        return $this;
    }

    public function getImage(): ?string
    {
        return 'uploads'.ImageHelper::PROJECT_IMAGE_PATH.'/'.$this->image;
    }

    public function setImage(?string $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getProjectImage(): ?ProjectImage
    {
        return $this->projectImage;
    }

    public function setProjectImage(?ProjectImage $projectImage): self
    {
        $this->projectImage = $projectImage;

        return $this;
    }

    public function getJsonResponse(): array
    {
        return [
            'id' => $this->getId(),
            'phase' => $this->getPhase(),
            'image' => '/'.$this->getImage(),
        ];
    }
}
