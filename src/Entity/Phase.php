<?php

namespace App\Entity;

use App\Repository\PhaseRepository;
use App\Service\ImageHelper;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\Criteria;
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

    /**
     * @ORM\OneToMany(targetEntity=Comment::class, mappedBy="phase", orphanRemoval=true)
     */
    private $comments;

    public function __construct()
    {
        $this->comments = new ArrayCollection();
    }

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
        return $this->image;
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

    /**
     * @return Collection|Comment[]
     */
    public function getParentComments(): Collection
    {
        $criteria = Criteria::create()
            ->where(Criteria::expr()->eq('parent', null));

        return $this->comments->matching($criteria);
    }

    /**
     * @return Collection|Comment[]
     */
    public function getComments(): Collection
    {
        return $this->comments;
    }

    public function addComment(Comment $comment): self
    {
        if (!$this->comments->contains($comment)) {
            $this->comments[] = $comment;
            $comment->setPhase($this);
        }

        return $this;
    }

    public function removeComment(Comment $comment): self
    {
        if ($this->comments->removeElement($comment)) {
            // set the owning side to null (unless already changed)
            if ($comment->getPhase() === $this) {
                $comment->setPhase(null);
            }
        }

        return $this;
    }
}
